import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Footer from "./Footer";
import Header from "../Header";

export default class Main extends Component {
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

                    </section>

                    <section className="underlineLib">
                        <img src="/img/underline.png"/>
                    </section>

                    <section className="books">

                    </section>
                </section>

                <Footer/>
            </div>
        );
    }
}