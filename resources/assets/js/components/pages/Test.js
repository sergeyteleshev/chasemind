import React, { Component } from 'react';
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";


export default class Test extends Component
{
    gettext(pdfUrl){
    let pdfjsLib = require('pdfjs-dist');
    let pdf = pdfjsLib.getDocument(pdfUrl);

        return pdf.then(function(pdf) { // get all pages text
        let maxPages = pdf.pdfInfo.numPages;
        let countPromises = []; // collecting all page promises
        for (let j = 1; j <= maxPages; j++) {
            let page = pdf.getPage(j);

            let txt = "";
            countPromises.push(page.then(function(page) { // add page promise
                let textContent = page.getTextContent();
                return textContent.then(function(text){ // return content promise
                    return text.items.map(function (s) { return s.str; }).join(''); // value page text

                });
            }));
        }
        // Wait for all pages and join text
        return Promise.all(countPromises).then(function (texts) {

            return texts.join('');
        });
    });
}

    submitUploadPdf()
    {
        // this.props.uploadPdf(this.props.pdfToUpload);
        this.gettext("https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf");

        // this.props.testFunct("Hello world", 'test.mp3');
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
                    </section>
                </section>

                <Footer/>
            </div>
        );
    }
}