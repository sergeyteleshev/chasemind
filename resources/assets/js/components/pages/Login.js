import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Footer from "./Footer";
import Header from "../Header";

export default class Login extends Component {
    render() {
        return (
            <div>
                <Header/>

                <section className="mainWrapper">
                    <section className="main">
                        <section className="text">
                            <section className="header">
                                Авторизация.
                            </section>
                        </section>

                        <section className="formContact">
                            <table>
                                <tr>
                                    <td>
                                        <input className="login" name="login" type="text" placeholder="Логин"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input className="password" name="password" type="password"
                                               placeholder="Пароль"/>
                                    </td>
                                </tr>
                            </table>

                            <section className="tableSignIn">
                                <table>
                                    <tr>
                                        <td>
                                            <input className="submit" type="submit" name="sendInf" value="Войти"/>
                                        </td>
                                        <td>
                                            <a href="/login">Забыли пароль?</a>
                                        </td>
                                    </tr>
                                </table>
                            </section>

                            <section className="response">

                            </section>
                        </section>

                        <section className="formReg">
                            <section className="formRegText">
                                Впервые на сайте друг?
                            </section>

                            <section className="formRegButton">
                                <input type="submit" value="Регистрация"/>
                            </section>
                        </section>
                    </section>

                </section>

                <Footer/>
            </div>
        );
    }
}