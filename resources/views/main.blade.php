<?php
session_start();

//include_once("php/config.php");
//include_once("php/Database.php");
//
//$db = new Database(HOST, USER, PASS, DB);
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

    <script src="js/jquery-3.0.0.min.js">

    </script>

    <script type="text/javascript" src="js/userQuit.js">

    </script>

    <script type="text/javascript" src="js/mainBooks.js">

    </script>

    <script type="text/javascript" src="js/userCheck.js">

    </script>

    <script type="text/javascript" src="js/menuMobile.js">

    </script>

    <script type="text/javascript" src="js/mainEmail.js">

    </script>

    <script type="text/javascript" src="js/subjectClick.js">

    </script>
</head>

<body>
<link rel="stylesheet" href="{{ URL::asset('css/login.css') }}">

<section class="modalWindow">
    <section class="formModalWindow">
        <section class="modalBar">
            <section class="closeModalBar"><span>x</span></section>
        </section>

        <section class="headerFormModal">

        </section>

        <section class="modalWindowContent">

        </section>
    </section>
</section>

<section class="mainTop">
    <section class="menuTest">
        <section class="menuTestWrapper">
            <section class="menuTestImg">
                <img src="img/menu_sandwich.svg"/>
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

    <section class="menu">
        <section class="main">
            <section class="menuWrapper">
                <a href="/main">
                    <section class="logo">
                        <section class="logoImg">
                            <img src="img/logoWhite.png"/>
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

    <section class="chooseObject">
        <section class="main">
            <section class="chooseObjectWrapper">
                <section class="chooseObjectLeftPart">
                    Конспекты книг по
                </section>

                <section class="chooseObjectRightPart">
                    <ul>
                        <li class="businessMain">бизнесу.</li>
                        <li class="healthMain">здоровью.</li>
                        <li class="artMain">творчеству.</li>
                        <li class="marketMain">маркетингу.</li>
                        <li class="selfdevelopmentMain">саморазвитию.</li>
                    </ul>
                </section>
            </section>

            <section class="useTime">
                Используй время продуктивно. <br/>
                Узнавай самые главные мысли полезных книг.
            </section>

            <section class="chooseObjectButtons">
                <section class="tryFreeButton">
                    <a href="/registration"><button>Попробовать<br/>бесплатно</button></a>
                </section>

                <section class="buySubButton">
                    <a href="/sub"><input type="submit" value="Оформить подписку"/></a>
                </section>
            </section>
        </section>
    </section>
</section>

<section class="discrBook">
    <section class="main">
        <section class="discrBookLeftPart">
            <img src="img/book.png"/>
        </section>

        <section class="discrBookRightPart">
            <section class="discrBookHeader">
                Путь к продуктивному чтению.
            </section>

            <section class="discrBookDiscr">
                <p>
                    Сервис Chase Mind – это огромная работа команды

                    профессиеоналов, преоделанная для того, чтобы создать

                    для Вас место длея получения интересной, и главное –

                    полезной информации из мира литературы.
                </p>


                <p>
                    Читайте продуктивнее, не тратьте время на «воду», открытвайте для себя новое и неизведанное.
                </p>

                <p>
                        <span>
                            Вместе с Chase Mind, вы с легкостью сможете стать
                            лучшей весией самого себя!
                        </span>
                </p>

                <p>
                    <a href="/lib"><input type="submit" value="Подробнее..."/></a>
                </p>
            </section>
        </section>
    </section>
</section>

<section class="reasonsToJoin">
    <section class="reasonsWrapper">
        <section class="reason">
            <section class="reasonImg">
                <img src="img/2.png"/>
            </section>

            <section class="reasonRightPart">
                <section class="reasonHeader">
                    Читай, слушай, смотри
                </section>

                <section class="reasonDiscr">
                    Конспекты книг
                    <br/>
                    предсталвены в удобных для
                    <br/>
                    форматах
                </section>
            </section>
        </section>

        <section class="reason">
            <section class="reasonImg">
                <img src="img/1.png"/>
            </section>

            <section class="reasonRightPart">
                <section class="reasonHeader">
                    Экономь своё время
                </section>

                <section class="reasonDiscr">
                    Конспеткы повышают
                    <br/>
                    эффективность и скорость
                    <br/>
                    чтения.
                </section>
            </section>
        </section>

        <section class="reason">
            <section class="reasonImg">
                <img src="img/3.png"/>
            </section>

            <section class="reasonRightPart">
                <section class="reasonHeader">
                    Бери самое полезное
                </section>

                <section class="reasonDiscr">
                    Важная информация из книг.
                    <br/>
                    Никакой «воды» – только
                    <br/>
                    нужное.
                </section>
            </section>
        </section>
    </section>
</section>

<section class="newBooks">
    <section class="newBooksWrapper">
        <section class="newBooksHeader">
            Новинки книг.
        </section>

        <section class="newBooksDiscr">
            Никогда не поздно пробежать свой первый ультрамарафон
            <br/>
            или освоить интернет-маркетинг в интернете. Об этом и
            <br/>
            многом другом в новинках конспектов.
        </section>

        <section class="newBooksCourusel">

        </section>
    </section>
</section>

<section class="subOnMailing">
    <section class="subOnMailingWrapper">
        <section class="subOnMailingHeader">
            Подписка на рассылку.
        </section>

        <section class="subOnMailingDiscr">
            Никакого спама – на ваш e-mail будет присылаться только полезный
            <br/>
            контент о саморазвитии: новые знания, интересные новости из мира книг,
            <br/>
            информация о новых конспектах на сайте
        </section>

        <section class="subOnMailingEmail">
            <input class="emailInput" type="text" placeholder="Ваш e-mail"/>
        </section>

        <section class="subOnMailingSubmit">
            <input type="submit" value="Подписаться"/>
        </section>
    </section>
</section>

<section class="lastStep">
    <section class="lastStepHeader">
        Последний шаг.
    </section>

    <section class="lastStepDiscr">
        Все начинается с первого уверенного решения.
        <br/>
        Это легче, чем может показаться!
    </section>

    <section class="lastStepSubmit">
        <a href="/registration">
            <button>
                Попробовать
                <br/>
                бесплатно
            </button>
        </a>
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
                    <a href="https://vk.com/chasemind"><img src="img/vk.svg"></a>
                </section>

                <section class="footerImg">
                    <a href="https://www.instagram.com/chasemind/"><img src="img/instagram.svg"></a>
                </section>

                <section class="footerImg">
                    <a href="https://www.youtube.com/channel/UCL0UdndbjzmEKtyoktusfbA"><img src="img/youtube.svg"></a>
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
