import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                {/*<link rel="stylesheet" href="css/login.css"/>*/}

                    <section className="modalWindow">
                        <section className="formModalWindow">
                            <section className="modalBar">
                                <section className="closeModalBar"><span>x</span></section>
                            </section>

                            <section className="headerFormModal">

                            </section>

                            <section className="modalWindowContent">

                            </section>
                        </section>
                    </section>

                    <section className="mainTop">
                        <section className="menuTest">
                            <section className="menuTestWrapper">
                                <section className="menuTestImg">
                                    <img src="img/menu_sandwich.svg"/>
                                </section>

                                <section className="menuTestVar">

                                </section>
                            </section>
                        </section>


                        <section className="navigation">
                            <section className="navigationWrapper">
                                <nav>
                                    <ul>
                                        <li><Link to="/">Главная</Link></li>
                                        <li><Link to="/sub">Подписка</Link></li>
                                        <li><a href="https://vk.com/chasemind">Блог</a></li>
                                        <li><Link to="/lib">Библиотека</Link></li>
                                        <li><Link to="/contact">Контакты</Link></li>
                                    </ul>
                                </nav>
                            </section>
                        </section>

                        <section className="menu">
                            <section className="main">
                                <section className="menuWrapper">
                                    <Link to="/">
                                        <section className="logo">
                                            <section className="logoImg">
                                                <img src="img/logoWhite.png"/>
                                            </section>
                                            <section className="logoText">CHASE MIND</section>
                                        </section>
                                    </Link>

                                    <section className="pages">
                                        <nav className="nav">
                                            <ul>
                                                <li><Link to="/sub">Подписка</Link></li>
                                                <li><a href="https://vk.com/chasemind">Блог</a></li>
                                                <li><Link to="/lib">Библиотека</Link></li>
                                                <li><Link to="/contact">Контакты</Link></li>
                                            </ul>
                                        </nav>
                                    </section>

                                    <section className="auth">
                                    <section className="authLeft">
                                        Войти
                                    </section>

                                    <section className="authRight">
                                        Регистрация
                                    </section>
                                </section>
                                </section>
                            </section>
                        </section>

                        <section className="chooseObject">
                            <section className="main">
                                <section className="chooseObjectWrapper">
                                    <section className="chooseObjectLeftPart">
                                        Конспекты книг по
                                    </section>

                                    <section className="chooseObjectRightPart">
                                        <ul>
                                            <li className="businessMain">бизнесу.</li>
                                            <li className="healthMain">здоровью.</li>
                                            <li className="artMain">творчеству.</li>
                                            <li className="marketMain">маркетингу.</li>
                                            <li className="selfdevelopmentMain">саморазвитию.</li>
                                        </ul>
                                    </section>
                                </section>

                                <section className="useTime">
                                    Используй время продуктивно. <br/>
                                    Узнавай самые главные мысли полезных книг.
                                </section>

                                <section className="chooseObjectButtons">
                                    <section className="tryFreeButton">
                                        <a href="/registration">
                                            <button>Попробовать<br/>бесплатно</button>
                                        </a>
                                    </section>

                                    <section className="buySubButton">
                                        <a href="/sub"><input type="submit" value="Оформить подписку"/></a>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>

                    <section className="discrBook">
                        <section className="main">
                            <section className="discrBookLeftPart">
                                <img src="img/book.png"/>
                            </section>

                            <section className="discrBookRightPart">
                                <section className="discrBookHeader">
                                    Путь к продуктивному чтению.
                                </section>

                                <section className="discrBookDiscr">
                                    <p>
                                        Сервис Chase Mind – это огромная работа команды

                                        профессиеоналов, преоделанная для того, чтобы создать

                                        для Вас место длея получения интересной, и главное –

                                        полезной информации из мира литературы.
                                    </p>


                                    <p>
                                        Читайте продуктивнее, не тратьте время на «воду», открытвайте для себя новое и
                                        неизведанное.
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

                    <section className="reasonsToJoin">
                        <section className="reasonsWrapper">
                            <section className="reason">
                                <section className="reasonImg">
                                    <img src="img/2.png"/>
                                </section>

                                <section className="reasonRightPart">
                                    <section className="reasonHeader">
                                        Читай, слушай, смотри
                                    </section>

                                    <section className="reasonDiscr">
                                        Конспекты книг
                                        <br/>
                                        предсталвены в удобных для
                                        <br/>
                                        форматах
                                    </section>
                                </section>
                            </section>

                            <section className="reason">
                                <section className="reasonImg">
                                    <img src="img/1.png"/>
                                </section>

                                <section className="reasonRightPart">
                                    <section className="reasonHeader">
                                        Экономь своё время
                                    </section>

                                    <section className="reasonDiscr">
                                        Конспеткы повышают
                                        <br/>
                                        эффективность и скорость
                                        <br/>
                                        чтения.
                                    </section>
                                </section>
                            </section>

                            <section className="reason">
                                <section className="reasonImg">
                                    <img src="img/3.png"/>
                                </section>

                                <section className="reasonRightPart">
                                    <section className="reasonHeader">
                                        Бери самое полезное
                                    </section>

                                    <section className="reasonDiscr">
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

                    <section className="newBooks">
                        <section className="newBooksWrapper">
                            <section className="newBooksHeader">
                                Новинки книг.
                            </section>

                            <section className="newBooksDiscr">
                                Никогда не поздно пробежать свой первый ультрамарафон
                                <br/>
                                или освоить интернет-маркетинг в интернете. Об этом и
                                <br/>
                                многом другом в новинках конспектов.
                            </section>

                            <section className="newBooksCourusel">

                            </section>
                        </section>
                    </section>

                    <section className="subOnMailing">
                        <section className="subOnMailingWrapper">
                            <section className="subOnMailingHeader">
                                Подписка на рассылку.
                            </section>

                            <section className="subOnMailingDiscr">
                                Никакого спама – на ваш e-mail будет присылаться только полезный
                                <br/>
                                контент о саморазвитии: новые знания, интересные новости из мира книг,
                                <br/>
                                информация о новых конспектах на сайте
                            </section>

                            <section className="subOnMailingEmail">
                                <input className="emailInput" type="text" placeholder="Ваш e-mail"/>
                            </section>

                            <section className="subOnMailingSubmit">
                                <input type="submit" value="Подписаться"/>
                            </section>
                        </section>
                    </section>

                    <section className="lastStep">
                        <section className="lastStepHeader">
                            Последний шаг.
                        </section>

                        <section className="lastStepDiscr">
                            Все начинается с первого уверенного решения.
                            <br/>
                            Это легче, чем может показаться!
                        </section>

                        <section className="lastStepSubmit">
                            <a href="/registration">
                                <button>
                                    Попробовать
                                    <br/>
                                    бесплатно
                                </button>
                            </a>
                        </section>
                    </section>

                    <section className="footer">
                        <section className="main">
                            <section className="leftPart">
                                <section className="headerLeftPart">
                                    CHASE MIND
                                </section>

                                <section className="imagesLeftPart">
                                    <section className="footerImg">
                                        <a href="https://vk.com/chasemind"><img src="img/vk.svg"/></a>
                                    </section>

                                    <section className="footerImg">
                                        <a href="https://www.instagram.com/chasemind/"><img src="img/instagram.svg"/></a>
                                    </section>

                                    <section className="footerImg">
                                        <a href="https://www.youtube.com/channel/UCL0UdndbjzmEKtyoktusfbA"><img
                                            src="img/youtube.svg"/></a>
                                    </section>
                                </section>
                            </section>

                            <section className="rightPart">
                                <section className="linksRightPart">
                                    <ul>
                                        <li><Link to="/sub">Подписка</Link></li>
                                        <li><a href="https://vk.com/chasemind">Блог</a></li>
                                        <li><Link to="/lib">Библиотека</Link></li>
                                        <li><Link to="/contact">Контакты</Link></li>
                                    </ul>
                                </section>

                                <section className="forContact">
                                    Для связи: <span>help@chasemind.ru</span>
                                </section>
                            </section>
                        </section>
                    </section>
            </div>
        );
    }
}