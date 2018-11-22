import React, { Component } from 'react';
import Footer from "./Footer";
import Header from "../Header";

export default class Main extends Component {
    componentWillMount()
    {
        this.props.fetchBooks();
    }

    render() {
        return (
            <div>
                <Header/>

                <section className="main">
                    <section className="path">
                        • > Библиотека
                    </section>

                    <section className="headerLib">
                        Библиотека.
                    </section>

                    <section className="objectOfBook">
                        <input type={"button"} onClick={() => this.props.test()}/>
                    </section>

                    <section className="underlineLib">
                        <img src="/img/underline.png"/>
                    </section>

                    <section className="books">
                        <section className='newBook'>
                            <section className='newBookImg'>
                                <img src=""/>
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