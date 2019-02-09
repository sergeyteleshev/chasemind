<?php

namespace App\Http\Controllers;

use App\Order;
use App\User;

use App\YaCloud;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Jose\Component\Core\AlgorithmManager;
use Jose\Component\Core\Converter\StandardConverter;
use Jose\Component\KeyManagement\JWKFactory;
use Jose\Component\Signature\JWSBuilder;
use Jose\Component\Signature\Algorithm\PS256;
use Jose\Component\Signature\Serializer\CompactSerializer;
use Lcobucci\JWT\Claim\Factory;
use phpseclib\Crypt\RSA;
use Redirect;

class UserController extends Controller
{
    const SUB_1_DAYS = 31;
    const SUB_2_DAYS = 183;
    const SUB_3_DAYS = 365;

    private function infoForPay($login)
    {
        return User::where('name', $login)->first();
    }

    /**
     * @param $api_token
     * @return string
     * @throws \Exception
     */

    public function testYa()
    {
        $tek_time = time();
        $query = 'SELECT * FROM ya_cloud limit 1';


        $result = mysql_query($query);
        while ($row = mysql_fetch_assoc($result))
        {
            $old_time = $row['old_time'];
            $OAuth_token = $row['OAuth_token'];
        }
        mysql_free_result($result);

        $prochlo = $tek_time - $old_time;

        if ($prochlo > 39600) {
            echo 'Настала пора обновить токен';
            ob_start();
            system("curl -X POST -H 'Content-Type: application/json' -d '{\"yandexPassportOauthToken\": \"".$OAuth_token."\"}' https://iam.api.cloud.yandex.net/iam/v1/tokens");

            $content = ob_get_contents();
            $my_new_array = json_decode($content, true);
            // var_dump($my_new_array);
            // echo $my_new_array['iamToken'];

            $zapS_UPDATE = "UPDATE ya_cloud
                          SET old_time = ".time().", IAM_TOKEN = '".$my_new_array['iamToken']."' 
                           WHERE id=1";
            // echo $zapS_UPDATE;

            $result6 = mysql_query($zapS_UPDATE);
            $url = 'http://obzvon.onetelecom24.ru/tocken.php?key=123545&tocken='.$my_new_array['iamToken'].'';
            echo $url;
            $file2 = file_get_contents($url);
        }
        else
        {
            //echo 'Время обновления не настало';
        }
        ////////////////////////////////////// перегенерировали ключи
        ///
        ///
        return 0;
    }

    public function getJWTtoken($api_token)
    {
        $service_account_id = YaCloud::find(1)['OAuth_token'];
        //ID ресурса Key, который принадлежит сервисному аккаунту.
        $key_id = "b1g8js4v9qfgcc35vhr7";

        $jsonConverter = new StandardConverter();
        $algorithmManager = AlgorithmManager::create([
            new PS256()
        ]);

        $jwsBuilder = new JWSBuilder($jsonConverter, $algorithmManager);

        $now = time();

        $claims = [
            'aud' => 'https://iam.api.cloud.yandex.net/iam/v1/tokens',
            'iss' => $service_account_id,
            'iat' => $now,
            'exp' => $now + 360
        ];

        $header = [
            'alg' => 'PS256',
            'typ' => 'JWT',
            'kid' => $key_id
        ];

        $file_key = Storage::get('private/privateKey.pem');

        try
        {
            $key = JWKFactory::createFromKey($file_key);
        }
        catch (\Exception $e)
        {
            throw $e;
        }

        $payload = $jsonConverter->encode($claims);

        // Формирование подписи.
        $jws = $jwsBuilder
            ->create()
            ->withPayload($payload)
            ->addSignature($key, $header)
            ->build();

        $serializer = new CompactSerializer($jsonConverter);

        // Формирование JWT.
        $token = $serializer->serialize($jws);

        return $token;
    }

    public function getOAuthToken()
    {
        return YaCloud::find(1)['OAuth_token'];
    }

    public function getIAMtoken()
    {
        $OAuth_token = $this->getOAuthToken();
        $url = "https://iam.api.cloud.yandex.net/iam/v1/tokens?yandexPassportOauthToken=" . $OAuth_token;
        $headers = array("Content-Type: application/json", "charset=UTF-8");
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE);

        $response = json_decode(curl_exec($ch));
        curl_close($ch);

        return $response->iamToken;
    }

    private function getOrderId()
    {
        $order = Order::max('id');

        return $order + 1;
    }

    public function payForSubSuccess(Request $request)
    {
        $login = $request->input('Shp_username');
        $user = User::where('name', $login)->first();
        $daysLeft = $user['daysLeft'];
        $subType = $request->input('Shp_item');

        $inv_id = $request->input('InvId');
        $crc = strtoupper($request->input('SignatureValue'));
        $out_summ = $request->input('OutSum');
        $pass = "KBxkUkxZ5eqG8JU72I3r";

        $my_crc = strtoupper(md5("$out_summ:$inv_id:$pass:Shp_item=$subType:Shp_username=$login"));

        if($crc != $my_crc)
            return response()->json(['error' => 'signature failed to confirm'], 500);


        if($login && $subType && $user)
        {
            if($subType === "1")
            {
                $daysLeft += + self::SUB_1_DAYS;
            }
            else if($subType === "2")
            {
                $daysLeft += self::SUB_2_DAYS;
            }
            else if($subType === "3")
            {
                $daysLeft += self::SUB_3_DAYS;
            }

            $update_res = User::where('name', $login)->update([
                'daysLeft' => $daysLeft,
            ]);

            return Redirect::to('/');
        }

        return Redirect::to('/');
    }

    public function payForSubFail(Request $request)
    {
        return Redirect::to('/');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function payForSub(Request $request)
    {
        $typeOfSub = $request->input('typeOfSub');
        $user = User::findOrFail($request->input('user_id'));

        if($typeOfSub && $user)
        {
            //todo неверный тип подписки
            if($typeOfSub < 1 && $typeOfSub > 3)
            {

            }
            else
            {
                $res = $this->infoForPay($user['name']);

                $email = $res["email"];

                // регистрационная информация (Идентификатор магазина, пароль #1)
                // registration info (Merchant ID, password #1)
                $mrh_login = "stellech";
                $mrh_pass1 = "KBxkUkxZ5eqG8JU72I3r";

                // номер заказа
                // number of order
                $inv_id = $this->getOrderId();

                // описание заказа
                // order description
                $inv_desc = "Покупка подписки Chase Mind";

                // сумма заказа
                // sum of order

                if($typeOfSub == 1)
                {
                    $out_summ = "1.00";
                }
                else
                {
                    if ($typeOfSub == 2)
                    {
                        $out_summ = "2.00";
                    }
                    else
                    {
                        if($typeOfSub == 3)
                        {
                            $out_summ = "3.00";
                        }
                        else
                        {
                            $out_summ = null;
                        }
                    }
                }

                //заказ в нашей системе
                $order = new Order();
                $order->user_id = $request->input('user_id');
                $order->type_of_sub = $typeOfSub;
                $order->sub_cost_rub = $out_summ;
                $order->save();

                // тип товара
                // code of goods
                $shp_item = $typeOfSub;

                // язык
                // language
                $culture = "ru";

                // кодировка
                // encoding
                $encoding = "utf-8";

                $shp_username = strtolower($user['name']);

                // формирование подписи
                // generate signature
                $crc  = md5("$mrh_login:$out_summ:$inv_id:$mrh_pass1:Shp_item=$shp_item:Shp_username=$shp_username");

                // форма оплаты товара
                // payment form
                $form = "<form style='display: none;' action='https://auth.robokassa.ru/Merchant/Index.aspx' method=POST>".
                    "<input type=hidden name=MrchLogin value=$mrh_login>".
                    "<input type=hidden name=OutSum value=$out_summ>".
                    "<input type=hidden name=InvId value=$inv_id>".
                    "<input type=hidden name=Desc value='$inv_desc'>".
                    "<input type=hidden name=SignatureValue value=$crc>".
                    "<input type=hidden name=Shp_item value='$shp_item'>".
                    "<input type=hidden name=Shp_username value=$shp_username>".
                    "<input type=hidden name=Culture value=$culture>".
                    "<input type=hidden name=Email value=$email>".
                    "<input class='robokassaSubmit' type=submit value='Хочу!'>".
                    "</form>";

                return response()->json($form, 200);
            }
        }
        else
        {
            echo response()->json(false);
        }

    }
}
