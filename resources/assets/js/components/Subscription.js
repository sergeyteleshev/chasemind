import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

export default class Subscription extends Component {
    render() {
        return (
            <div>
                <section className="modalWindow">
                    <section className="formModalWindow">
                        <section className="modalBar">
                            <section className="closeModalBar"><img src="/img/cancel.svg"/></section>
                        </section>

                        <section className="headerFormModal">

                        </section>

                        <section className="modalWindowContent">

                        </section>
                    </section>
                </section>

                <section className="subBackground">
                    <section className="menu">
                        <section className="main">
                            <section className="menuWrapper">
                                <Link to="/">
                                    <section className="logo">
                                        <section className="logoImg">
                                            <img src="/img/logoWhite.png"/>
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

                    <section className="menuTest">
                        <section className="menuTestWrapper">
                            <section className="menuTestImg">
                                <img src="/img/menu_sandwich.svg"/>
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

                    <section className="subHeader">
                        Оформить подписку.
                        <br/>
                        <span>Регистрация и подписка на Chase Mind это:</span>
                    </section>

                    <section className="subAdvantages">
                        <section className="subFirstRow">
                            <section className="subOneAdvantage">
                                <section className="subOneAdvantageImg">
                                    <img src="/img/1.png"/>
                                </section>

                                <section className="subOneAdvantageText">
                                    Разнообразные форматы: аудио, текст, интеллект-карта, видео
                                </section>
                            </section>

                            <section className="subOneAdvantage">
                                <section className="subOneAdvantageImg">
                                    <img src="/img/2.png"/>
                                </section>

                                <section className="subOneAdvantageText">
                                    Невероятная экономия времени!
                                </section>
                            </section>

                            <section className="subOneAdvantage">
                                <section className="subOneAdvantageImg">
                                    <img src="/img/3.png"/>
                                </section>

                                <section className="subOneAdvantageText">
                                    Путь к развитию и продуктивному чтению
                                </section>
                            </section>

                            <section className="subOneAdvantage">
                                <section className="subOneAdvantageImg">
                                    <img src="/img/4.png"/>
                                </section>

                                <section className="subOneAdvantageText">
                                    Обширная библиотека кратких конспектов полезных книг
                                </section>
                            </section>

                            <section className="subOneAdvantage">
                                <section className="subOneAdvantageImg">
                                    <img src="/img/5.png"/>
                                </section>

                                <section className="subOneAdvantageText">
                                    Идеи из самых лучших и полезных книг
                                </section>
                            </section>
                        </section>
                    </section>
                </section>

                <section className="chooseHeader">
                    Выберите вариант подписки.
                </section>

                <section className="subVariants">
                    <section className="subMin">
                        <section className="subMinTop">
                            <section className="minHeader">
                                Minimum
                            </section>

                            <section className="minMonth">
                                1
                                <span>Месяц</span>
                            </section>

                            <section className="minPrice">
                                290<span>c</span>
                            </section>
                        </section>

                        <section className="subMinMid">
                            <img src="/img/podpiska_Minimum.png"/>
                        </section>


                        <section className="minButton">
                            <input type="submit" value="Выбрать"/>
                        </section>
                    </section>


                    <section className="subMed">
                        <section className="subMedTop">
                            <section className="medHeader">
                                Medium
                            </section>

                            <section className="medMonth">
                                6
                                <span>Месяцев</span>
                            </section>

                            <section className="medPrice">
                                990<span>c</span>
                            </section>
                        </section>

                        <section className="subMedMid">
                            <img src="/img/podpiska_Medium.png"/>
                        </section>


                        <section className="medButton">
                            <input type="submit" value="Выбрать"/>
                        </section>
                    </section>

                    <section className="subOpt">
                        <section className="subOptTop">
                            <section className="optHeader">
                                Optimum
                            </section>

                            <section className="optMonth">
                                12
                                <span>Месяцев</span>
                            </section>

                            <section className="optPrice">
                                1690<span>c</span>
                            </section>
                        </section>

                        <section className="subOptMid">
                            <img src="/img/podpiska_Optimum.png"/>
                        </section>


                        <section className="optButton">
                            <input type="submit" value="Выбрать"/>
                        </section>

                    </section>
                </section>

                <section className="subVariantsMobile">
                    <section className="minButtonMobile">
                        <section className="minButtonHeaderMobile">
                            Minimum
                        </section>

                        <section className="monthMobile">
                            1 месяц
                        </section>

                        <section className="priceMobile">
                            290<span>c</span>
                        </section>

                        <section className="gardientMinMobile">

                        </section>
                    </section>

                    <section className="optButtonMobile">
                        <section className="minButtonHeaderMobile">
                            Optimum
                        </section>

                        <section className="monthMobile">
                            6 месяцев
                        </section>

                        <section className="priceMobile">
                            990<span>c</span>
                        </section>

                        <section className="gardientOptMobile">

                        </section>
                    </section>

                    <section className="medButtonMobile">
                        <section className="minButtonHeaderMobile">
                            Medium
                        </section>

                        <section className="monthMobile">
                            12 месяцев
                        </section>

                        <section className="priceMobile">
                            1690<span>c</span>
                        </section>

                        <section className="gardientMedMobile">

                        </section>
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
                                    <a href="https://vk.com/chasemind"><img src="/img/vk.svg"/></a>
                                </section>

                                <section className="footerImg">
                                    <a href="https://www.instagram.com/chasemind/"><img
                                        src="/img/instagram.svg"/></a>
                                </section>

                                <section className="footerImg">
                                    <a href="https://www.youtube.com/channel/UCL0UdndbjzmEKtyoktusfbA"><img
                                        src="/img/youtube.svg"/></a>
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