import React, { Component } from 'react';
import Footer from "./Footer";
import Header from "../Header";

export default class Library extends Component {
    componentWillMount()
    {
        this.props.fetchBooks();
    }

    render() {
        const { test2, fetchBooks, libBooks } = this.props;
         let author = 'not loaded';
        if(Object.keys(libBooks).length > 0) {
            author = libBooks[0].author
        }
        return (
            <div>
                <Header/>

                <section className="main">
                    <section className="path">
                        • > Библиотека {author}
                    </section>

                    <section className="headerLib">
                        Библиотека.
                    </section>

                    <section className="objectOfBook">
                        <input type={"button"} onClick={() => fetchBooks()}/>
                    </section>

                    <section className="underlineLib">
                        <img src="/img/underline.png"/>
                    </section>

                    <section className="books">
                        <section className='newBook'>
                            <section className='newBookImg'>
                                <img src="#"/>
                            </section>
                            <section className='newBookTitle'>
                                Kekmda
                            </section>
                        </section>
                    </section>
                </section>

                <Footer/>
            </div>
        );
    }
}