import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Registration extends Component {
    render() {
        return (
            <div>
                <section className="menu">
                    <section className="main">
                        <section className="menuWrapper">
                            <a href="/main">
                                <section className="logo">
                                    <section className="logoImg">
                                        <img src="../../../localhost/img/logoWhite.png"/>
                                    </section>
                                    <section className="logoText">CHASE MIND</section>
                                </section>
                            </a>

                            <section className="pages">
                                <nav className="nav">
                                    <ul>
                                        <a href="/sub">
                                            <li>Подписка</li>
                                        </a>
                                        <a href="https://vk.com/chasemind">
                                            <li>Блог</li>
                                        </a>
                                        <a href="/lib">
                                            <li>Библиотека</li>
                                        </a>
                                        <a href="/contact">
                                            <li>Контакты</li>
                                        </a>
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
                            <img src="../../../localhost/img/menu_sandwich.svg"/>
                        </section>

                        <section className="menuTestVar">

                        </section>
                    </section>
                </section>

                <section className="navigation">
                    <section className="navigationWrapper">
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

                <section className="main">
                    <section className="text">
                        <section className="header">
                            Регистрация.
                        </section>
                        <section className="discription">
                            Разнообразная база конспектов и полезные материалы <br/>
                            уже ждут тебя, осталось совсем чуть-чуть!
                        </section>
                    </section>


                    <section className="formContact">
                        <table>
                            <tr>
                                <td>
                                    <input className="login" placeholder="Логин" name="login" type="text"
                                           value="<?=$_SESSION['login']?>"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input className="email" placeholder="E-mail" name="email" type="text"
                                           value="<?=$_SESSION['email']?>"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input className="password" placeholder="Пароль" name="password" type="password"
                                           value=""/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input className="passwordAgain" placeholder="Пароль(снова)" name="passwordAgain"
                                           type="password"/>
                                </td>
                            </tr>
                        </table>

                        <input className="submit" type="submit" name="sendInf" value="Регистрация"/>
                        <section className="response">

                        </section>
                    </section>
                    <section className="signInPart">
                        <a href="/login">У меня уже есть учётная запись</a>
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
                                    <a href="https://vk.com/chasemind"><img src="../../../localhost/img/vk.svg"/></a>
                                </section>

                                <section className="footerImg">
                                    <a href="https://www.instagram.com/chasemind/"><img
                                        src="../../../localhost/img/instagram.svg"/></a>
                                </section>

                                <section className="footerImg">
                                    <a href="https://www.youtube.com/channel/UCL0UdndbjzmEKtyoktusfbA"><img
                                        src="../../../localhost/img/youtube.svg"/></a>
                                </section>
                            </section>
                        </section>

                        <section className="rightPart">
                            <section className="linksRightPart">
                                <ul>
                                    <li><a href="/sub">Подписка</a></li>
                                    <li><a href="https://vk.com/chasemind">Блог</a></li>
                                    <li><a href="/lib">Библиотека</a></li>
                                    <li><a href="/contact">Контакты</a></li>
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

if (document.getElementById('root')) {
    ReactDOM.render(<Registration />, document.getElementById('root'));
}
