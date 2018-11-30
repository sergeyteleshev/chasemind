import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footer";
import HeaderContainer from "../../containers/HeaderContainer";

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
                    <HeaderContainer/>

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

                <Footer/>
            </div>
        );
    }
}