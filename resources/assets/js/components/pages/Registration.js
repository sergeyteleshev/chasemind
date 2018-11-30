import React, { Component } from 'react';
import Footer from "./Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import {Redirect} from "react-router-dom";

export default class Registration extends Component {
    render() {
        const {name, email} = this.props.user;
        if((typeof name === "string" && typeof email === "string") && name.length > 0 && email.length > 0)
        {
            return <Redirect to={"/lib"}/>;
        }

        return (
            <div>
                <HeaderContainer/>

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
                            <tbody>
                                <tr>
                                    <td>
                                        <input className="login" onChange={(event) => this.props.loginHandleChange(event)} value={this.props.login} placeholder="Логин" name="login" type="text"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input className="email" onChange={(event) => this.props.emailHandleChange(event)} value={this.props.email} placeholder="E-mail" name="email" type="text"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input className="password" onChange={(event) => this.props.passHandleChange(event)} value={this.props.password} placeholder="Пароль" name="password" type="password"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input className="passwordAgain" onChange={(event) => this.props.passAgainHandleChange(event)} value={this.props.passwordAgain} placeholder="Пароль(снова)" name="passwordAgain" type="password"/>
                                        {/*<span className={"registerResponse"}>{JSON.stringify(this.props.user)}</span>*/}
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <input className="submit" onClick={() => this.props.submitRegister(this.props.login, this.props.email, this.props.password, this.props.passwordAgain)} type="submit" name="sendInf" value="Регистрация"/>
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