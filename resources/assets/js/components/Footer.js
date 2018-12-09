import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {CONTACT_LINK, LIBRARY_LINK, SUB_LINK} from "../consts/pageLinks";

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
                                    <Link to={SUB_LINK}><li>Подписка</li></Link>
                                    <a target={"_blank"} href="https://vk.com/sergeyteleshev"><li>Блог</li></a>
                                    <Link to={LIBRARY_LINK}><li>Библиотека</li></Link>
                                    <Link to={CONTACT_LINK}><li>Контакты</li></Link>
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
