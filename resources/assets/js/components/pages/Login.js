import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footer";
import HeaderContainer from "../../containers/HeaderContainer";

export default class Login extends Component {
    render() {
        return (
            <div>
                <HeaderContainer/>

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
                                        <input onChange={(event) => this.props.loginInputHandleChange(event)} value={this.props.loginInput} className="login" name="login" type="text" placeholder="Логин"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input onChange={(event) => this.props.passwordInputHandleChange(event)} value={this.props.passwordInput} className="password" name="password" type="password"
                                               placeholder="Пароль"/>
                                    </td>
                                </tr>
                            </table>

                            <section className="tableSignIn">
                                <table>
                                    <tr>
                                        <td>
                                            <input onClick={() => this.props.submitLogin(this.props.loginInput, this.props.passwordInput)} className="submit" type="submit" name="sendInf" value="Войти"/>
                                        </td>
                                        <td>
                                            <Link to={"/reg"}>Забыли пароль?</Link>
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
                                <Link to={"/reg"}><input type="submit" value="Регистрация"/></Link>
                            </section>
                        </section>
                    </section>

                </section>

                <Footer/>
            </div>
        );
    }
}