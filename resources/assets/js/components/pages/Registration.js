import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import Footer from "./Footer";
import Header from "../Header";

export default class Registration extends Component {
    render() {
        return (
            <div>
                <Header/>

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

                <Footer/>
            </div>
        );
    }
}