import React, { Component } from 'react';
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";

export default class Test extends Component
{
    submitUploadPdf()
    {
        this.props.fetchUploadPdf(this.props.pdfToUpload);
        // this.props.testFunct("Hello world", 'test.mp3');
        // this.props.fetchTextToSpeech("test text");
    }

    render()
    {
        return (
            <div>
                <HeaderContainer/>

                <section className="main">
                    <section className="bookButtons">
                        {/*<textarea onChange={(event) => this.props.contactMessageHandleChange(event)} value={this.props.message} className="contactMessage" name="message" resize="none" placeholder="Сообщение"/>*/}
                        <br/>
                        <input type={"file"} accept="application/pdf" onChange={(event) => this.props.uploadPdfHandleChange(event)}/>
                        {/*todo как яндекс ответит*/}
                        {/*<input type="submit" value="API" id="linkOnText" onClick={() => this.props.fetchTextToSpeech()}/>*/}
                        <input type="submit" value="отправить" id="linkOnVideo" onClick={() => this.submitUploadPdf()}/>
                        <p>{this.props.pdfUploadResponse.text ? this.props.pdfUploadResponse.text.length : null}</p>
                        <p>{this.props.pdfUploadResponse.text}</p>
                    </section>
                </section>

                <Footer/>
            </div>
        );
    }
}