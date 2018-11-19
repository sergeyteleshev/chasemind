import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                    <section className="main">
                        <section className="leftPart">
                            <section className="headerLeftPart">
                                CHASE MIND
                            </section>

                            <section className="imagesLeftPart">
                                <section className="footerImg">
                                    <a href="https://vk.com/chasemind"><img src="/img/vk.svg"/> </a>
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
        );
    }
}
