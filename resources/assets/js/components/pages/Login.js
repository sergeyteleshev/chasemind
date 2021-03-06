import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import {LIBRARY_LINK, REGISTRATION_LINK} from "../../consts/pageLinks";

export default class Login extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            loginResponse: null,
        };
    }

    submitLogin()
    {
        if(this.props.loginInput === '' || this.props.passwordInput === '')
        {
            this.setState({
                loginResponse: "Заполните все поля",
            });
        }
        else
        {
            this.props.submitLogin(this.props.loginInput, this.props.passwordInput, this.props.remember);

            if(!this.props.authorized && this.props.isLoginLoading === false && this.props.isLoginFetchDone === true && Object.keys(this.props.user).length === 0)
            {
                setInterval(() => {
                    this.setState({
                        loginResponse: "Неверный логин или пароль",
                    });
                }, 1000);
            }
        }
    }

    _handleKeyPress(e) {
        if (e.key === 'Enter')
        {
            this.submitLogin();
        }
    }

    render()
    {
        const {name, email, id} = this.props.user;

        if((typeof name === "string" && typeof email === "string" && typeof id === "number") && name.length > 0 && email.length > 0 && id > 0)
        {
            return <Redirect to={LIBRARY_LINK}/>;
        }

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
                                <tbody>
                                    <tr>
                                        <td>
                                            <input onKeyPress={(event) => this._handleKeyPress(event)} onChange={(event) => this.props.loginInputHandleChange(event)} value={this.props.loginInput} className="login" name="login" type="text" placeholder="Логин"/>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <input onKeyPress={(event) => this._handleKeyPress(event)} onChange={(event) => this.props.passwordInputHandleChange(event)} value={this.props.passwordInput} className="password" name="password" type="password" placeholder="Пароль"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <section className="tableSignIn">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input onClick={() => this.submitLogin()} className="submit" type="submit" name="sendInf" value="Войти"/>
                                            </td>
                                            <td>
                                                <Link to={REGISTRATION_LINK}>Забыли пароль?</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>

                            <section className={"rememberMe"}>
                                <label><input onChange={(event) => this.props.rememberMeHandleChange(event)} checked={this.props.remember} type={"checkbox"}/> запомнить меня?</label>
                            </section>

                            <section className="response loginResponse">
                                {this.state.loginResponse}
                            </section>
                        </section>

                        <section className="formReg">
                            <section className="formRegText">
                                Впервые на сайте друг?
                            </section>

                            <section className="formRegButton">
                                <Link to={REGISTRATION_LINK}><input type="submit" value="Регистрация"/></Link>
                            </section>
                        </section>
                    </section>

                </section>

                <Footer/>
            </div>
        );
    }
}