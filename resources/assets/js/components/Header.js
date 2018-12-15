import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import {getCookie} from "../helpers/cookies";
import {CONTACT_LINK, LIBRARY_LINK, LOGIN_LINK, MAIN_LINK, REGISTRATION_LINK, SUB_LINK} from "../consts/pageLinks";

export default class Header extends Component {
    componentWillMount()
    {
        let rememberToken = getCookie('remember_token');
        let apiToken = getCookie('api_token');

        if(rememberToken)
        {
            this.props.fetchLoginViaRememberToken(rememberToken);
        }
        else if(apiToken)
        {
            this.props.fetchLoginViaApiToken(apiToken);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let loginButtons = (
            <section className="auth">
                <Link to={LOGIN_LINK}>
                    <section className="authLeft">
                        Войти
                    </section>
                </Link>

                <Link to={REGISTRATION_LINK}>
                    <section className="authRight">
                        Регистрация
                    </section>
                </Link>
            </section>
        );

        let {name, email} = this.props.user;

        if((typeof name === "string" && typeof email === "string") && name.length > 0)
        {
            loginButtons = (
                <section className="auth">
                    <section className="authLeft">
                        {name}
                    </section>

                    <section onClick={() => this.props.submitLogout()} className="authRight">
                        Выйти
                    </section>
                </section>
            );
        }

        let menuMobile = null;

        if(this.props.isMenuMobileOpened)
        {
            menuMobile = <section className="navigation">
                <section className="navigationWrapper">
                    <nav>
                        <ul>
                            <Link to={MAIN_LINK}><li>Главная</li></Link>
                            <Link to={SUB_LINK}><li>Подписка</li></Link>
                            <a target={"_blank"} href={"https://vk.com/sergeyteleshev"}><li>Блог</li></a>
                            <Link to={LIBRARY_LINK}><li>Библиотека</li></Link>
                            <Link to={CONTACT_LINK}><li>Контакты</li></Link>
                        </ul>
                    </nav>
                </section>
            </section>
        }

        return (
            <div>
                <section className="menu">
                    <section className="main">
                        <section className="menuWrapper">
                            <Link to={MAIN_LINK}>
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
                                        <Link to={SUB_LINK}><li>Подписка</li></Link>
                                        <a target={"_blank"} href={"https://vk.com/sergeyteleshev"}><li>Блог</li></a>
                                        <Link to={LIBRARY_LINK}><li>Библиотека</li></Link>
                                        <Link to={CONTACT_LINK}><li>Контакты</li></Link>
                                        <Link to={"/test"}><li>Тест</li></Link>
                                    </ul>
                                </nav>
                            </section>

                            {loginButtons}
                        </section>
                    </section>
                </section>

                <section className="menuTest">
                    <section className="menuTestWrapper">
                        <section className="menuTestImg">
                            <img onClick={() => this.props.handleMenuMobile(!this.props.isMenuMobileOpened)} src="/img/menu_sandwich.svg"/>
                        </section>

                        <section className="menuTestVar">

                        </section>
                    </section>
                </section>

                {menuMobile}
            </div>
        );
    }
}
