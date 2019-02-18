import React, { Component } from 'react';
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";

export default class AddBook extends Component
{
    submitUploadBook()
    {
        console.log(this.props.pdfToUpload);

        const book = {
            title: this.props.title,
            author: this.props.author,
            desc: this.props.desc,
            slogan: this.props.slogan,
            sloganENG: this.props.sloganENG,
            publisher: this.props.publisher,
            pagesOriginal: this.props.pagesOriginal,
            pagesAbstarct: this.props.pagesAbstarct,
            imgURL: this.props.imgURL,
            pdfToUpload: this.props.pdfToUpload,
            subject: this.props.subject,
        };

        this.props.addBook({...book});

        // this.props.fetchTextToSpeech("test text");
        // this.props.fetchTextToSpeechYandex("тест сука");
        //this.props.fetchUploadPdf(this.props.pdfToUpload);
    }

    render()
    {
        return (
            <div>
                <HeaderContainer/>

                <section className={"main"}>
                    <section className="path">
                        • > Добавить книгу
                    </section>

                    <section className="headerLib">
                        Добавить книгу.
                    </section>

                    <section className="addBookContainer">
                        <input value={this.props.title} onChange={(event) => this.props.textInputHandleChange('title', event)} placeholder={"Заголовок"} className={"inputText"} type={"text"}/>
                        <input value={this.props.author} onChange={(event) => this.props.textInputHandleChange('author', event)} placeholder={"Автор"} className={"inputText"} type={"text"}/>
                        <textarea value={this.props.desc} onChange={(event) => this.props.textInputHandleChange('desc', event)} placeholder={"Описание"} className={"inputText"}/>
                        <textarea value={this.props.slogan} onChange={(event) => this.props.textInputHandleChange('slogan', event)} placeholder={"Главная цитата"} className={"inputText"}/>
                        <textarea value={this.props.sloganENG} onChange={(event) => this.props.textInputHandleChange('sloganENG', event)} placeholder={"Главная цитата(ENG)"} className={"inputText"}/>
                        <textarea value={this.props.publisher} onChange={(event) => this.props.textInputHandleChange('publisher', event)} placeholder={"Издание"} className={"inputText"}/>
                        <input value={this.props.subject} onChange={(event) => this.props.textInputHandleChange('subject', event)} placeholder={"Тематика"} className={"inputText"} type={"number"}/>
                        <input value={this.props.pagesOriginal} onChange={(event) => this.props.textInputHandleChange('pagesOriginal', event)} placeholder={"Кол-во страниц оригинала"} className={"inputText"} type={"number"}/>
                        <input value={this.props.pagesAbstarct} onChange={(event) => this.props.textInputHandleChange('pagesAbstarct', event)} placeholder={"Кол-во страниц конспекта"} className={"inputText"} type={"number"}/>
                        <input className={"inputText"} value={this.props.imgURL} onChange={(event) => this.props.textInputHandleChange('imgURL', event)} placeholder={"url обложки"} type={"text"}/>
                        <br/>
                        <label className={"labelInput"}>Pdf-коспекта: <input className={"fileInput"} type={"file"} accept="application/pdf" onChange={(event) => this.props.uploadPdfHandleChange(event)}/></label>
                        <input className={"submitButton"} type="submit" value="отправить" id="linkOnVideo" onClick={() => this.submitUploadBook()}/>
                        <p>{this.props.pdfUploadResponse.text ? this.props.pdfUploadResponse.text.length : null}</p>
                        <p>{this.props.pdfUploadResponse.text}</p>
                    </section>
                </section>

                <Footer/>
            </div>
        );
    }
}