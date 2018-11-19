import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Contact extends Component {
    render() {
        return (
            <div>
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

                <section className="main">
                    <section className="path">
                        • > Контакты
                    </section>

                    <section className="headerLib">
                        Контакты.
                    </section>

                    <section className="discription">
                        Вы легко можете связатся с нами.
                        Для этого заполните форму ниже или напишите на
                        почту: help@chasemind.ru
                    </section>


                    <section className="formContact">
                        <table>
                            <tr>
                                <td>
                                    <input className="contactName" name="name" type="text" placeholder="Имя"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input className="contactEmail" name="email" type="text" placeholder="E-mail"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <textarea className="contactMessage" name="message" resize="none"
                                              placeholder="Сообщение"></textarea>
                                </td>
                            </tr>
                        </table>

                        <section className="submitContact">
                            <input className="submit" type="submit" name="sendInf" value="Связаться с нами"/>
                        </section>

                        <section className="response">

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