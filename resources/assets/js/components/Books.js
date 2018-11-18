import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Books extends Component {
    render() {
        return (
            <div>
                <section className="modalWindow">
                    <section className="formModalWindow">
                        <section className="modalBar">
                            <section className="closeModalBar"><img src="../../../localhost/img/cancel.svg"/></section>
                        </section>

                        <section className="headerFormModal">

                        </section>

                        <section className="modalWindowContent">
                            <section className="modalWindowText">
                                Полная версия конспекта доступна только
                                <br/>
                                <span>пользователям с подпиской.</span>
                                <br/>
                                Сейчас вы можете:
                            </section>
                            <input type="submit" className="modalDemo" value="Cкачать демо"/>
                            <section className="signInOutLinks">
                                <a href="/registration"><input className="modalRegister" type="submit"
                                                               value="Регистрация"/></a>
                                <a href="/sub"><input type="submit" className="buyFormModal" value="Полный доступ"/></a>
                            </section>

                            <section className="loginLink">
                                <a href="/login">У меня уже есть учётная запись</a>
                            </section>

                            <section className="subLink">
                                <a href="/login">или получить <span>полный доступ</span></a>
                            </section>
                        </section>
                    </section>
                </section>

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
                    <section className="path">
                        • > Библиотека
                    </section>

                    <section className="bookWrapper">
                        <section className="topOfBook">
                            <section className="topOfBookImg">

                            </section>

                            <section className="topOfBookText">
                                <section className="topOfBookHeader">

                                </section>

                                <section className="topOfBookSlogan">

                                </section>

                                <section className="topOfBookSloganEng">

                                </section>

                                <section className="topOfBookAuthor">

                                </section>

                                <section className="topOfBookPublisher">

                                </section>
                            </section>

                            <section className="middleOfBook">
                                <section className="middleOfBookPages">
                                    <section className="firstRow">
                                        Оригинал книги <span></span>
                                    </section>

                                    <section className="secondRow">
                                        Конспект книги <span></span>
                                    </section>
                                </section>

                                <section className="middleOfBookAdvantage">

                                </section>
                            </section>

                            <section className="bookButtonsMobile">
                                <input type="submit" value="Читать" id="linkOnTextMobile"/>
                                <input type="submit" value="Слушать" id="linkOnAudioMobile"/>
                                <input type="submit" value="Смотреть" id="linkOnVideoMobile"/>
                            </section>

                            <section className="bottomOfBook">
                                <section className="bottomOfBookHeader">
                                    Описание.
                                </section>

                                <section className="bottomOfBookDiscription">

                                </section>
                            </section>
                        </section>

                        <section className="bookButtons">
                            <input type="submit" value="Читать" id="linkOnText"/>
                            <input type="submit" value="Слушать" id="linkOnAudio"/>
                            <input type="submit" value="Смотреть" id="linkOnVideo"/>
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
                                    <a href="https://vk.com/chasemind"><img src="../../../localhost/img/vk.svg"/> </a>
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
    ReactDOM.render(<Books />, document.getElementById('root'));
}
