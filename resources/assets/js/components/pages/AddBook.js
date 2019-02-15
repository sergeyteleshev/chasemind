import React, { Component } from 'react';
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import {getIAMtoken} from "../../actions";

export default class AddBook extends Component
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
                    <section className="path">
                        • > Добавить книгу
                    </section>

                    <section className="headerLib">
                        Добавить книгу.
                    </section>

                    <section className="addBookContainer">
                        <input placeholder={"Заголовок"} className={"inputText"} type={"text"}/>
                        <textarea placeholder={"Описание"} className={"inputText"}/>
                        <textarea placeholder={"Главная цитата"} className={"inputText"}/>
                        <textarea placeholder={"Главная цитата(ENG)"} className={"inputText"}/>
                        <input placeholder={"Кол-во страниц оригинала"} className={"inputText"} type={"number"}/>
                        <input placeholder={"Кол-во страниц конспекта"} className={"inputText"} type={"number"}/>
                        <br/>
                        <label className={"labelInput"}>Pdf-коспекта: <input className={"fileInput"} type={"file"} accept="application/pdf" onChange={(event) => this.props.uploadPdfHandleChange(event)}/></label>
                        <label className={"labelInput"}>Обложка: <input className={"fileInput"} type={"file"} accept="image/png"/></label>
                        {/*todo как яндекс ответит*/}
                        {/*<input type="submit" value="API" id="linkOnText" onClick={() => this.props.fetchTextToSpeech()}/>*/}
                        <input className={"submitButton"} type="submit" value="отправить" id="linkOnVideo" onClick={() => this.submitUploadPdf()}/>
                        <p>{this.props.pdfUploadResponse.text ? this.props.pdfUploadResponse.text.length : null}</p>
                        <p>{this.props.pdfUploadResponse.text}</p>
                    </section>
                </section>

                <Footer/>
            </div>
        );
    }
}