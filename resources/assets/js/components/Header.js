import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";

export default class Header extends Component {
    render() {
        let loginButtons = (
            <section className="auth">
                <Link to={"/login"}>
                    <section className="authLeft">
                        Войти
                    </section>
                </Link>

                <Link to={"/reg"}>
                    <section className="authRight">
                        Регистрация
                    </section>
                </Link>
            </section>
        );

        const {name, email} = this.props.user;
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

        return (
            <div>
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
                                        <li><a href="https://vk.com/sergeyteleshev">Блог</a></li>
                                        <li><Link to="/lib">Библиотека</Link></li>
                                        <li><Link to="/contact">Контакты</Link></li>
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
            </div>
        );
    }
}
