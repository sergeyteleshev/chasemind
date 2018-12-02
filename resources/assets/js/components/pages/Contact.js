import React, { Component } from 'react';
import HeaderContainer from "../../containers/HeaderContainer";
import Footer from "./Footer";
import {contactNameHandleChange} from "../../actions";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <HeaderContainer/>

                <section className="main">
                    <section className="path">
                        • > Контакты
                    </section>

                    <section className="headerLib">
                        Контакты.
                    </section>

                    <section className="discription">
                        Вы легко можете связатся с нами.
                        Для этого заполните форму ниже или напишите на
                        почту: help@chasemind.ru
                    </section>


                    <section className="formContact">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <input onChange={(event) => this.props.contactNameHandleChange(event)} value={this.props.name} className="contactName" name="name" type="text" placeholder="Имя"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input onChange={(event) => this.props.contactEmailHandleChange(event)} value={this.props.email} className="contactEmail" name="email" type="text" placeholder="E-mail"/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <textarea onChange={(event) => this.props.contactMessageHandleChange(event)} value={this.props.message} className="contactMessage" name="message" resize="none" placeholder="Сообщение"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <section className="submitContact">
                            <input onClick={() => this.props.contactSubmit(this.props.name, this.props.email, this.props.message)} className="submit" type="submit" name="sendInf" value="Связаться с нами"/>
                        </section>

                        <section className="response">

                        </section>
                    </section>


                </section>

                <Footer/>
            </div>
        );
    }
}