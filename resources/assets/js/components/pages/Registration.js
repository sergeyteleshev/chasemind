import React, { Component } from 'react';
import Footer from "./Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import {Link, Redirect} from "react-router-dom";
import {LIBRARY_LINK, LOGIN_LINK} from "../../consts/pageLinks";

export default class Registration extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            fillResponse: null,
            passResponse: null,
        }
    }

    submitRegister()
    {
        if(this.props.password !== this.props.passwordAgain)
        {
            this.setState({
                passResponse: "Пароли не совпадают",
            });
        }
        else if((this.props.login === '' || this.props.email === '' || this.props.password === '' || this.props.passwordAgain === ''))
        {
            this.setState({
                fillResponse: "Заполните все поля",
            });
        }
        else
        {
            this.setState({fillResponse: null, passResponse: null});
            this.props.submitRegister(this.props.login, this.props.email, this.props.password, this.props.passwordAgain)
        }
    }

    render()
    {
        const {name, email} = this.props.user;
        if((typeof name === "string" && typeof email === "string") && name.length > 0 && email.length > 0)
        {
            return <Redirect to={LIBRARY_LINK}/>;
        }

        let emailResponse = this.props.emailChecked.error ? "Такой email уже существует" : null;
        let loginResponse = this.props.loginChecked.error ? "Такой логин уже существует" : null;

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

                        <input className="submit" onClick={() => this.submitRegister()} type="submit" name="sendInf" value="Регистрация"/>

                        <section className="response loginResponse">
                            {loginResponse}
                        </section>

                        <section className="response emailResponse">
                            {emailResponse}
                        </section>

                        <section className="response fillResponse">
                            {this.state.fillResponse}
                        </section>

                        <section className="response passResponse">
                            {this.state.passResponse}
                        </section>
                    </section>
                    <section className="signInPart">
                        <Link to={LOGIN_LINK}>У меня уже есть учётная запись</Link>
                    </section>
                </section>

                <Footer/>
            </div>
        );
    }
}