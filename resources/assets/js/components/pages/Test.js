import React, { Component } from 'react';
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import {getIAMtoken} from "../../actions";

export default class Test extends Component
{
    submitUploadPdf()
    {
        // this.props.fetchUploadPdf(this.props.pdfToUpload);
        this.props.testFunct("Hello world. My name is Sergey. I'm 21 years old. suka blyat", 'test.mp3');
        //this.props.fetchTextToSpeech("test text");
        // this.props.fetchTextToSpeechYandex("тест сука");
    }

    render()
    {
        return (
            <div>
                <HeaderContainer/>

                <section className="main">
                    <section className="test">
                        <input placeholder={"Заголовок книги"} className={"inputText"} type={"text"}/>
                        <textarea placeholder={"Описание книги"} className={"inputText"}/>
                        <textarea placeholder={"Главная цитата"} className={"inputText"}/>
                        <textarea placeholder={"Главная цитата(ENG)"} className={"inputText"}/>
                        <input placeholder={"Количество страниц оригинала книги"} className={"inputText"} type={"number"}/>
                        <input placeholder={"Количество страниц конспекта"} className={"inputText"} type={"number"}/>
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