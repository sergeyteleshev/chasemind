import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from "../Header";
import Footer from "./Footer";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>

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
                            <tr>
                                <td>
                                    <input className="contactName" name="name" type="text" placeholder="Имя"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <input className="contactEmail" name="email" type="text" placeholder="E-mail"/>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <textarea className="contactMessage" name="message" resize="none"
                                              placeholder="Сообщение"></textarea>
                                </td>
                            </tr>
                        </table>

                        <section className="submitContact">
                            <input className="submit" type="submit" name="sendInf" value="Связаться с нами"/>
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