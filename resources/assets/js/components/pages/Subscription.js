import React, {Component} from 'react';
import Footer from "./Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import {Link} from "react-router-dom";
import {LOGIN_LINK, REGISTRATION_LINK} from "../../consts/pageLinks";

export default class Subscription extends Component {
    renderSubModalWindow()
    {
        if (!this.props.isSubModalWindowShowing)
            return null;

        return (
            <section className="modalWindow">
                <section className="formModalWindow">
                    <section className="modalBar">
                        <section className="closeModalBar"><img onClick={() => this.props.hideSubDialog()} src="/img/cancel.svg"/></section>
                    </section>

                    <section className="headerFormModal">

                    </section>

                    <section className="modalWindowContent">
                        <section className="modalWindowText">
                            Полные версии конспектов доступна только
                            <br/>
                            <span>зарегистрированным пользователям с подпиской.</span>
                            <br/>
                            Сейчас вы можете:
                        </section>
                        <Link to={REGISTRATION_LINK}><input type="submit" className="modalDemo" value="Регистрация"/></Link>

                        <section className="loginLink">
                            <Link to={LOGIN_LINK}>У меня уже есть учётная запись</Link>
                        </section>
                    </section>
                </section>
            </section>
        );
    }

    buySub(typeOfSub)
    {
        if(this.props.authorized)
        {
            return this.props.fetchRobokassa(typeOfSub, this.props.user.id);
        }
        else
        {
            return this.props.showSubDialog();
        }
    }

    render() {
        return (
            <div>
                {this.renderSubModalWindow()}

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
                            <input type="submit" onClick={() => this.buySub(1)} value="Выбрать"/>
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
                            <input type="submit" onClick={() => this.buySub(2)} value="Выбрать"/>
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
                            <input type="submit" onClick={() => this.buySub(3)} value="Выбрать"/>
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