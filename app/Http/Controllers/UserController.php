<?php

namespace App\Http\Controllers;

use App\Order;
use App\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    const SUB_1_DAYS = 31;
    const SUB_2_DAYS = 183;
    const SUB_3_DAYS = 365;

    private function infoForPay($login)
    {
        return User::where('name', $login)->first();
    }

    private function getOrderId()
    {
        $order = Order::max('id');

        return $order + 1;
    }

    public function payForSubSuccess(Request $request)
    {
        $subType = $request->input('Shp_item');
        $login = $request->input('Shp_username');
        $user = User::where('name', $login)->first();
        $daysLeft = $user['daysLeft'];

        if($login && $subType && $user && $daysLeft)
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

            return redirect()->route('welcome', [
                'success' => true,
                'updated_user' => $update_res,
            ]);
        }

        return Redirect::to('/');

//        return redirect()->('lib', ['success' => false]);
    }

    public function payForSubFail(Request $request)
    {
        return Redirect::to('/');
//        return redirect()->route('sub', ['success' => false]);
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
