import React, { Component } from 'react';
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import {testFunct} from "../../actions";

export default class Test extends Component
{
    render()
    {
        return (
            <div>
                <HeaderContainer/>

                <section className="main">
                    <textarea onChange={(event) => this.props.contactMessageHandleChange(event)} value={this.props.message} className="contactMessage" name="message" resize="none" placeholder="Сообщение"/>

                    <section className="bookButtons">
                        <input type="submit" value="API" id="linkOnText" onClick={() => this.props.fetchTextToSpeech("Тестовый текст")}/>
                        <input  type="submit" value="Слушать" id="linkOnAudio" onClick={() => this.props.testFunct()}/>
                        <input type="submit" value="Смотреть" id="linkOnVideo"/>
                    </section>
                </section>

                <Footer/>
            </div>
        );
    }
}