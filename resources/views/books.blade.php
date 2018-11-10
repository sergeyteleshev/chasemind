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
    
    <script type="text/javascript" src="../../../localhost/js/daysLeftCheck.js">
        
    </script>
    
    <script type="text/javascript" src="../../../localhost/js/downloadMaterial.js">
        
    </script>
    
    <script type="text/javascript" src="../../../localhost/js/userCheckNorm.js">
        
    </script>
    
    <script type="text/javascript">
        function downloadContent(id, contentType)
        {
           var status = null;
           var daysLeft = null;
                           
           if (<?php if(!isset($_SESSION['s_login'])) echo "'notlogined'"; else echo "'logined'";?> == "notlogined")
           {
               status = "notlogined";
           }
           else
           {
               status = "logined";
               daysLeft = <?php include("php/daysLeft.php"); if (isset($_SESSION['s_login'])) echo daysLeft($_SESSION['s_login']); else echo -1;?>;
           }
           
           if(status == "logined" && daysLeft > 0)
           {
               downloadMaterial(id, 'linkOn' + contentType); 
               return true;
           }
           else
           {    
                if(status == "logined" && daysLeft == 0)
                {
                    $(".modalWindow").css("display", "block");
                    $(".signInOutLinks").empty();
                    $(".modalDemo").css("display", "block");
                    $(".loginLink").empty();
                    $(".modalDemo").one('click', function(){
                        downloadMaterial(id, 'linkOnDemo' + contentType);
                        $(".modalDemo").hide(500);
                        $(".modalAnswer").append("Демо материал отсутствует");
                        return true;
                    });      
                }
                else
                {
                    if(status == "notlogined" && daysLeft == null)
                        $(".modalWindow").css("display", "block");
                    
                    $(".subLink").empty();
                    $(".modalRegister").css("display", "block");
                    $(".modalSignIn").css("display", "block");
                    $(".modalDemo").css("display", "none");
                    return false;
                }
           }
       }
    
        function getUrlVars()
        {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for(var i = 0; i < hashes.length; i++)
            {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        }
        
        $(document).ready(function()
        {
            $.ajax({
                url: "php/getOneBook.php",
                data: {target : getUrlVars()["target"]},
                type: "GET",
                dataType: "JSON",
                success: function(data)
                {
                    $.each(data, function(i,item){
                       $(".topOfBookImg").append("<img src=\"" + item.imgURL + "\"/>");
                       $(".path").append(" > " + item.subject + " > " + item.name)
                       $(".topOfBookHeader").append(item.name);
                       $(".topOfBookSlogan").append(item.slogan);
                       $(".topOfBookSloganEng").append(item.sloganENG);
                       $(".topOfBookAuthor").append(item.author);
                       $(".topOfBookPublisher").append(item.publisher);
                       $(".firstRow span").append(item.pagesBook + " стр.");
                       $(".secondRow span").append(item.pagesAbstract + " стр.");
                       $(".middleOfBookAdvantage").append(Math.floor(item.pagesBook/item.pagesAbstract)*100 + "% <span>преимущество</span>")
                       $(".bottomOfBookDiscription").append(item.description);
                       
                       $("#linkOnText").on('click', function()
                       {
                           $(".modalAnswer").empty();
                           downloadContent(item.id, 'Text');
                           $(".headerFormModal").empty();
                           $(".headerFormModal").append("Читать книгу<br/>" + "«" + item.name + "»");
                       });
                       
                       $("#linkOnAudio").on('click', function(){
                           $(".modalAnswer").empty();
                           downloadContent(item.id, 'Audio');
                           $(".headerFormModal").empty();
                           $(".headerFormModal").append("Слушать книгу<br/>" + "«" + item.name + "»");
                       });
                       
                       $("#linkOnVideo").on('click', function(){
                           $(".modalAnswer").empty();
                           downloadContent(item.id, 'Video');
                           $(".headerFormModal").empty();
                           $(".headerFormModal").append("Смотреть книгу<br/>" + "«" + item.name + "»");
                       });
                       
                       $("#linkOnTextMobile").on('click', function()
                       {
                           $(".modalAnswer").empty();
                           downloadContent(item.id, 'Text');
                           $(".headerFormModal").empty();
                           $(".headerFormModal").append("Читать книгу<br/>" + "«" + item.name + "»");
                       });
                       
                        $("#linkOnAudioMobile").on('click', function(){
                           $(".modalAnswer").empty();
                           downloadContent(item.id, 'Audio');
                           $(".headerFormModal").empty();
                           $(".headerFormModal").append("Слушать книгу<br/>" + "«" + item.name + "»");
                       });
                       
                       $("#linkOnVideoMobile").on('click', function(){
                           $(".modalAnswer").empty();
                           downloadContent(item.id, 'Video');
                           $(".headerFormModal").empty();
                           $(".headerFormModal").append("Смотреть книгу<br/>" + "«" + item.name + "»");
                       });
                       
                       $(".closeModalBar img").click(function(){
                           $(".modalWindow").hide(); 
                           return;
                       });
                    });
                }
            });
        });
    </script>
    
    <script type="text/javascript" src="../../../localhost/js/userQuit.js">
        
    </script>
    
    <script type="text/javascript" src="../../../localhost/js/userCheck.js">
         
    </script>
    
    
    <script type="text/javascript" src="../../../localhost/js/menuMobile.js">
        
    </script>
  </head>

  <body>
    <section class="modalWindow">
        <section class="formModalWindow">
            <section class="modalBar">
                <section class="closeModalBar"><img src="../../../localhost/img/cancel.svg"/></section>
            </section>
            
            <section class="headerFormModal">
                
            </section>
            
            <section class="modalWindowContent">
                <section class="modalWindowText">
                    Полная версия конспекта доступна только 
                    <br/>
                    <span>пользователям с подпиской.</span>
                    <br/>
                    Сейчас вы можете:
                </section>
                <input type="submit" class="modalDemo" value="Cкачать демо"/>
                <section class="signInOutLinks">
                    <a href="/registration"><input class="modalRegister" type="submit" value="Регистрация"/></a>
                    <a href="/sub"><input type="submit" class="buyFormModal" value="Полный доступ"/></a>
                </section>
                
                <section class="loginLink">
                    <a href="/login">У меня уже есть учётная запись</a>
                </section>
                
                <section class="subLink">
                    <a href="/login">или получить <span>полный доступ</span></a>
                </section>
            </section>
        </section>
    </section>  
    
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
        <section class="path">
            • > Библиотека
        </section>
        
        <section class="bookWrapper">
            <section class="topOfBook">
                <section class="topOfBookImg">
                    
                </section>
                
                <section class="topOfBookText">
                    <section class="topOfBookHeader">
                        
                    </section>
                    
                    <section class="topOfBookSlogan">
                        
                    </section>
                    
                    <section class="topOfBookSloganEng">
                        
                    </section>
                    
                    <section class="topOfBookAuthor">
                        
                    </section>
                    
                    <section class="topOfBookPublisher">
                        
                    </section>
                </section>
                
                <section class="middleOfBook">
                    <section class="middleOfBookPages">
                        <section class="firstRow">
                            Оригинал книги <span></span>
                        </section>
                        
                        <section class="secondRow">
                            Конспект книги <span></span>
                        </section>
                    </section>
                    
                    <section class="middleOfBookAdvantage">
                        
                    </section>
                </section>
                
                <section class="bookButtonsMobile">
                    <input type="submit" value="Читать" id="linkOnTextMobile"/>
                    <input type="submit" value="Слушать" id="linkOnAudioMobile"/>
                    <input type="submit" value="Смотреть" id="linkOnVideoMobile"/>
                </section>
                
                <section class="bottomOfBook">
                    <section class="bottomOfBookHeader">
                        Описание.
                    </section>
                    
                    <section class="bottomOfBookDiscription">
                        
                    </section>
                </section>
            </section>
            
            <section class="bookButtons">
                <input type="submit" value="Читать" id="linkOnText"/>
                <input type="submit" value="Слушать" id="linkOnAudio"/>
                <input type="submit" value="Смотреть" id="linkOnVideo"/>
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
    
    <link rel="stylesheet" href="../../../localhost/css/login.css">
  </body>
</html>
