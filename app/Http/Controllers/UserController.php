<?php

namespace App\Http\Controllers;

use App\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    private function infoForPay($login)
    {
        $sql = "SELECT daysLeft, login, email, id FROM `User` WHERE login = '$login'";
        $res = mysql_query($sql);

        if ($res)
        {
            return $res;
        }
        else
        {
            return false;
        }
    }

    private function getOrderId()
    {
        $sql = "SELECT MAX(`id`) AS `maxid` FROM `Orders`";
        $res = mysql_query($sql);
        $id = 1;

        while($row = mysql_fetch_array($res))
        {
            $id = $row['maxid'];
        }

        return $id + 1;
    }

    /**
     * @param Request $request
     */
    public function payForSub(Request $request)
    {
        $typeOfSub = $request->input('typeOfSub');
        $user = User::findOrFail($request->input('user_id'));
        $daysLeft = $user->daysLeft;

        //todo у вас уже есть подписка
        if($daysLeft > 0)
        {

        }
        else
        {
            if($typeOfSub && $user && Auth::check() && (strtolower(Auth::user()) == strtolower($user)))
            {
                //todo неверный тип подписки
                if($typeOfSub < 1 && $typeOfSub > 3)
                {

                }
                else
                {
                    $res = $this->infoForPay($user->name);

                    $email = null;
                    $id = null;
                    $daysLeft = null;

                    while($row = mysql_fetch_assoc($res))
                    {
                        $email = $row["email"];
                        $id = $row["id"];
                        $daysLeft = $row["daysLeft"];
                    }

                    // регистрационная информация (Идентификатор магазина, пароль #1)
                    // registration info (Merchant ID, password #1)
                    $mrh_login = "chasemind";
                    $mrh_pass1 = "chasemindpasswordoneKeK123";

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
                            $out_summ = "1.00";
                        }
                        else
                        {
                            if($typeOfSub == 3)
                            {
                                $out_summ = "1.00";
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

                    $shp_username = strtolower($user);

                    // формирование подписи
                    // generate signature
                    $crc  = md5("$mrh_login:$out_summ:$inv_id:$mrh_pass1:Shp_item=$shp_item:Shp_username=$shp_username");

                    // форма оплаты товара
                    // payment form
                    echo json_encode
                    ("<form action='https://auth.robokassa.ru/Merchant/Index.aspx' method=POST>".
                        "<input type=hidden name=MrchLogin value=$mrh_login>".
                        "<input type=hidden name=OutSum value=$out_summ>".
                        "<input type=hidden name=InvId value=$inv_id>".
                        "<input type=hidden name=Desc value='$inv_desc'>".
                        "<input type=hidden name=SignatureValue value=$crc>".
                        "<input type=hidden name=Shp_item value='$shp_item'>".
                        "<input type=hidden name=Shp_username value=$shp_username>".
                        "<input type=hidden name=Culture value=$culture>".
                        "<input type=hidden name=Email value=$email>".
                        "<input type=submit value='Хочу!'>".
                        "</form>"
                    );
                }
            }
            else
            {
                echo json_encode(false);
            }
        }
    }
}
