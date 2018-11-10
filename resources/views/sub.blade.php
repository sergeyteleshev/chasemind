<?php
//    session_start();
//
//    include_once("php/config.php");
//    include_once("php/Database.php");
//
//    $db = new Database(HOST, USER, PASS, DB);
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
    
    
    <script type="text/javascript" src="../../../localhost/js/userQuit.js">
        
    </script>
    
    <script type="text/javascript" src="../../../localhost/js/userCheck.js">
         
    </script>
    
    <script type="text/javascript" src="../../../localhost/js/payForSub.js">
         
    </script>
    
    <script type="text/javascript" src="../../../localhost/js/menuMobile.js">
        
    </script>
    
    <script type="text/javascript">
        $(document).ready(function(){
           $("body").css("background", "url('../img/pattern4.png') #f1f1f1");
           $("body").css("background-size", "131px 330px");
           $("body").css("background-repeat", "repeat-x");
           $("body").css("background-position", "bottom, left"); 
        });
    </script>
    
  </head>

  <body>
    <link rel="stylesheet" href="../../../localhost/css/login.css">
    
    <section class="modalWindow">
        <section class="formModalWindow">
            <section class="modalBar">
                <section class="closeModalBar"><img src="../../../localhost/img/cancel.svg"/></section>
            </section>
            
            <section class="headerFormModal">
                
            </section>
            
            <section class="modalWindowContent">
                
            </section>
        </section>
    </section>  
    
    <section class="subBackground">
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
        
        <section class="subHeader">
            Оформить подписку.
            <br/>
            <span>Регистрация и подписка на Chase Mind это:</span>
        </section>
        
        <section class="subAdvantages">
            <section class="subFirstRow">
                <section class="subOneAdvantage">
                    <section class="subOneAdvantageImg">
                        <img src="../../../localhost/img/1.png"/>
                    </section>
                            
                    <section class="subOneAdvantageText">
                        Разнообразные форматы: аудио, текст, интеллект-карта, видео   
                    </section>
                </section>   
                   
                <section class="subOneAdvantage">
                    <section class="subOneAdvantageImg">
                        <img src="../../../localhost/img/2.png"/>
                    </section>
                            
                    <section class="subOneAdvantageText">
                        Невероятная экономия времени!
                    </section>
                </section>  
                   
                <section class="subOneAdvantage">
                    <section class="subOneAdvantageImg">
                        <img src="../../../localhost/img/3.png"/>
                    </section>
                            
                    <section class="subOneAdvantageText">
                        Путь к развитию и продуктивному чтению
                    </section>
                </section>
                
                <section class="subOneAdvantage">
                    <section class="subOneAdvantageImg">
                        <img src="../../../localhost/img/4.png"/>
                    </section>
                                
                    <section class="subOneAdvantageText">
                        Обширная библиотека кратких конспектов полезных книг
                    </section>
                </section>  
                       
                <section class="subOneAdvantage">
                    <section class="subOneAdvantageImg">
                        <img src="../../../localhost/img/5.png"/>
                    </section>
                            
                    <section class="subOneAdvantageText">
                        Идеи из самых лучших и полезных книг
                    </section>
                </section>  
            </section>
        </section>
    </section>
    
   <section class="chooseHeader">
        Выберите вариант подписки.
    </section>
    
    <section class="subVariants">
        <section class="subMin">
            <section class="subMinTop">
                <section class="minHeader">
                    Minimum
                </section>
                
                <section class="minMonth">
                    1
                    <span>Месяц</span>
                </section>
                
                <section class="minPrice">
                    290<span>c</span>
                </section>
            </section>
            
            <section class="subMinMid">
                <img src="../../../localhost/img/podpiska_Minimum.png"/>
            </section>
            
            
            <section class="minButton">
                <input type="submit" value="Выбрать"/>
            </section>
        </section>
        
        
        <section class="subMed">
            <section class="subMedTop">
                <section class="medHeader">
                    Medium
                </section>
                
                <section class="medMonth">
                    6
                    <span>Месяцев</span>
                </section>
                
                <section class="medPrice">
                    990<span>c</span>
                </section>
            </section>
            
            <section class="subMedMid">
                <img src="../../../localhost/img/podpiska_Medium.png"/>
            </section>
            
            
            <section class="medButton">
                <input type="submit" value="Выбрать"/>
            </section>
        </section>
        
        <section class="subOpt">
            <section class="subOptTop">
                <section class="optHeader">
                    Optimum
                </section>
                
                <section class="optMonth">
                    12
                    <span>Месяцев</span>
                </section>
                
                <section class="optPrice">
                    1690<span>c</span>
                </section>
            </section>
            
            <section class="subOptMid">
                <img src="../../../localhost/img/podpiska_Optimum.png"/>
            </section>
            
            
            <section class="optButton">
                <input type="submit" value="Выбрать"/>
            </section>
            
        </section>
    </section> 
    
    <section class="subVariantsMobile">
        <section class="minButtonMobile">
            <section class="minButtonHeaderMobile">
                Minimum
            </section>
            
            <section class="monthMobile">
                1 месяц
            </section>
            
            <section class="priceMobile">
                290<span>c</span>
            </section>
                        
            <section class="gardientMinMobile">
                
            </section>
        </section>
        
        <section class="optButtonMobile">
            <section class="minButtonHeaderMobile">
                Optimum
            </section>
            
            <section class="monthMobile">
                6 месяцев
            </section>
            
            <section class="priceMobile">
                990<span>c</span>
            </section>
                        
            <section class="gardientOptMobile">
                
            </section>
        </section>
        
        <section class="medButtonMobile">
            <section class="minButtonHeaderMobile">
                Medium
            </section>
            
            <section class="monthMobile">
                12 месяцев
            </section>
            
            <section class="priceMobile">
                1690<span>c</span>
            </section>
            
            <section class="gardientMedMobile">
                
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
</html>
