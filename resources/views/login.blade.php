<?php
//   session_start();
//
//    include_once("php/config.php");
//    include_once("php/Database.php");
//    $db = new Database(HOST, USER, PASS, DB);
//
//   if (isset($_SESSION['s_login']))
//   {
//       header("Location: /lib");
//   }
   
   
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
    
    <script src="../../../localhost/js/signIn.js" type="text/javascript">
        
    </script>
    
    <script src="../../../localhost/js/userCheck.js" type="text/javascript">
        
    </script>
    
    <script type="text/javascript">
        $(document).ready(function()
        {
            $("body").css("background", "url('../img/pattern1.png') #f1f1f1");
            $("body").css("background-size", "70px 417px");
            $("body").css("background-repeat", "repeat-x");
            $("body").css("background-position", "bottom, left");
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
    
    <section class="mainWrapper">
        <section class="main">
            <section class="text">
                <section class="header">
                    Авторизация.
                </section>
            </section>
            
            <section class="formContact">
                <table>
                    <tr>
                        <td>
                            <input class="login" name="login" type="text" placeholder="Логин"/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <input class="password" name="password" type="password" placeholder="Пароль"/>
                        </td>
                    </tr>
                </table>
                
                <section class="tableSignIn">
                    <table>
                        <tr>
                            <td>
                                <input class="submit" type="submit" name="sendInf" value="Войти"/>
                            </td>
                            <td>
                                <a href="/login">Забыли пароль?</a>
                            </td>
                        </tr>
                    </table>
                </section>

                <section class="response">
                    
                </section>
            </section>
            
            <section class="formReg">
                <section class="formRegText">
                    Впервые на сайте друг?
                </section>
                
                <section class="formRegButton">
                    <input type="submit" value="Регистрация"/>
                </section>
            </section>
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
