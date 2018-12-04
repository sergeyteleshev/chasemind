import React, { Component } from 'react';
import HeaderContainer from "../../containers/HeaderContainer";
import Footer from "./Footer";
import {contactNameHandleChange} from "../../actions";

export default class Contact extends Component {
    contactSubmit()
    {
        if(this.props.name.length > 0 && this.props.email.length > 0 && this.props.message.length > 0)
        {
            this.props.contactSubmit(this.props.name, this.props.email, this.props.message)
        }
        else
        {
            this.props.showContactFormErrorResponse();
        }
    }

    render() {
        let errorResponseText = null;
        let contactForm = null;

        if(this.props.contactFormErrorResponse === true)
        {
            errorResponseText = "Заполните все поля!";
        }

        contactForm = (
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
                            <input onChange={(event) => this.props.contactEmailHandleChange(event)} value={this.props.email} className="contactEmail" name="email" type="email" placeholder="E-mail"/>
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
                    <input onClick={() => this.contactSubmit()} className="submit" type="submit" name="sendInf" value="Связаться с нами"/>
                </section>

                <section className="response">
                    {errorResponseText}
                </section>
            </section>
        );

        if(this.props.contactSent)
        {
            contactForm = (
                <section className="formContact">
                    <section className="response">
                        Сообщение отправлено. Вам скоро ответят на почту!
                    </section>
                </section>
            );
        }

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

                    {contactForm}
                </section>

                <Footer/>
            </div>
        );
    }
}