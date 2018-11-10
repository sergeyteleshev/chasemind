<?php
//    session_start();
//
//    include_once("php/config.php");
//    include_once("php/Database.php");
//
//    $db = new Database(HOST, USER, PASS, DB);
//
//    if (isset($_SESSION['s_login']))
//    {
//        header('Location: /lib');
//    }
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CHASE MIND</title>
    <!--[if lt IE 9]>
	<script src="http://css3-mediaqueries-js.googlecode.com/files/css3-mediaqueries.js"></script>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    
    <script src="../../../localhost/js/jquery-3.0.0.min.js">
    </script>
    
    <script type="text/javascript" src="../../../localhost/js/menuMobile.js">
        
    </script>
    
    <script src="../../../localhost/js/userCheck.js" type="text/javascript">
        
    </script>
     
    <script type="text/javascript">
        $(document).ready(function()
        {
            $("body").css("background", "url('../img/pattern2.png') #f1f1f1");
            $("body").css("background-size", "51px 417px");
            $("body").css("background-repeat", "repeat-x");
            $("body").css("background-position", "bottom, left"); 
        });
    </script>
    
    <script type="text/javascript">
        $(document).ready(function()
        {
        
            $(".submit").click(function(){
                var log = $(".login").val();
                var pass = $(".password").val();
                var ema = $(".email").val();
                var passAgain = $(".passwordAgain").val();
                var i = 0;
                var countDogs = 0;
                var countDotsAfterDog = 0;
                
                for(i = 0; i < ema.length; i++)
                {
                    if (ema[i] == "@")
                    {
                        countDogs = countDogs + 1;
                    }
                    
                    if (countDogs > 0 && ema[i] == ".")
                    {
                        countDotsAfterDog = countDotsAfterDog + 1;
                    }
                }
                
                if(countDogs != 1 || countDotsAfterDog != 1)
                {
                    $(".response").empty();
                    alert("Неверный формат e-mail. Пример: help@chasemind.ru");
                    $(".response").append("Неверный формат e-mail. Пример: help@chasemind.ru");
                }
                else
                {
                    if(pass != passAgain)
                    {
                        $(".response").empty();
                        alert("Пароли не совпадают!");
                        $("response").append("Пароли не совпадают!");
                    }
                    else
                    {
                        $.ajax({
                           url: "php/signUp.php",
                           type: "GET",
                           data: {login: log, password: pass, email: ema},
                           dataType: "JSON",
                           success: function(data)
                           {
                               if (data == "Вы были успешно зарегистрированы!")
                               {
                                   $(".formContact table").hide(500);
                                   $(".formContact input").hide(500);
                               }
                               else
                               {
                                   alert(data);
                               }
                               
                               $(".response").empty();
                               $(".response").append(data);
                           }
                        });     
                    }
                }
            });
        });
    </script>
    
    <script type="text/javascript" src="../../../localhost/js/enterSubmit.js">
        
    </script>
  </head>

  <body>
    <section class="menu">
        <section class="main">
            <section class="menuWrapper">
                <a href="/main">
                    <section class="logo">
                        <section class="logoImg">
                            <img src="../../../localhost/img/logoWhite.png"/>
                        </section>
                        <section class="logoText">CHASE MIND</section>
                    </section>    
                </a>
                
                <section class="pages">
                    <nav class="nav">
                        <ul>
                            <a href="/sub"><li>Подписка</li></a>
                            <a href="https://vk.com/chasemind"><li>Блог</li></a>
                            <a href="/lib"><li>Библиотека</li></a>
                            <a href="/contact"><li>Контакты</li></a>
                        </ul>
                    </nav>
                </section>
           
                <section class="auth">
                    <section class="authLeft">
                        Войти
                    </section>
                    
                    <section class="authRight">
                        Регистрация
                    </section>
                </section>
            </section>
        </section>
    </section>
    
    <section class="menuTest">
        <section class="menuTestWrapper">
            <section class="menuTestImg">
                <img src="../../../localhost/img/menu_sandwich.svg"/>
            </section>
            
            <section class="menuTestVar">
                
            </section>
        </section>
    </section>


    <section class="navigation">
        <section class="navigationWrapper">
            <nav>
                <ul>
                    <li><a href="/main">Главная</a></li>
                    <li><a href="/sub">Подписка</a></li>
                    <li><a href="https://vk.com/chasemind">Блог</a></li>
                    <li><a href="/lib">Библиотека</a></li>
                    <li><a href="/contact">Контакты</a></li>
                </ul>
            </nav>
        </section>
    </section>
    
    <section class="main">
        <section class="text">
            <section class="header">
                Регистрация.
            </section>
            <section class="discription">
                Разнообразная база конспектов и полезные материалы <br/>
                уже ждут тебя, осталось совсем чуть-чуть!
            </section>
        </section>
        
        
        <section class="formContact">
            <table>
                <tr>
                    <td>
                        <input class="login" placeholder="Логин" name="login" type="text" value="<?=$_SESSION['login']?>"/>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <input class="email" placeholder="E-mail" name="email" type="text" value="<?=$_SESSION['email']?>"/>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <input class="password" placeholder="Пароль" name="password" type="password" value=""/>
                    </td>
                </tr>
                
                <tr>
                    <td>
                        <input class="passwordAgain" placeholder="Пароль(снова)" name="passwordAgain" type="password"/>
                    </td>
                </tr>
            </table>
            
            <input class="submit" type="submit" name="sendInf" value="Регистрация"/>
            <section class="response">
                
            </section>
        </section>
            <section class="signInPart">
                <a href="/login">У меня уже есть учётная запись</a>
            </section>
    </section>

    
<section class="footer">
        <section class="main">
            <section class="leftPart">
                <section class="headerLeftPart">
                    CHASE MIND    
                </section>
                    
                <section class="imagesLeftPart">
                    <section class="footerImg">
                        <a href="https://vk.com/chasemind"><img src="../../../localhost/img/vk.svg"></a>
                    </section>
                    
                    <section class="footerImg">
                        <a href="https://www.instagram.com/chasemind/"><img src="../../../localhost/img/instagram.svg"></a>
                    </section>
                    
                    <section class="footerImg">
                        <a href="https://www.youtube.com/channel/UCL0UdndbjzmEKtyoktusfbA"><img src="../../../localhost/img/youtube.svg"></a>
                    </section>
                </section>
            </section>
                
            <section class="rightPart">
               <section class="linksRightPart">
                    <ul>
                        <li><a href="/sub">Подписка</a></li>
                        <li><a href="https://vk.com/chasemind">Блог</a></li>
                        <li><a href="/lib">Библиотека</a></li>
                        <li><a href="/contact">Контакты</a></li>
                    </ul>
                </section>
                
                <section class="forContact">
                    Для связи: <span>help@chasemind.ru</span>
                </section>
            </section>   
        </section>
    </section>
    
  </body>
  
  <link rel="stylesheet" href="../../../localhost/css/login.css">
</html>


