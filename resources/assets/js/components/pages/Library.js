import React, { Component } from 'react';
import Footer from "./Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import {Link} from "react-router-dom";

export default class Library extends Component {
    componentWillMount()
    {
        this.props.fetchBooks();
    }

    renderBooks()
    {
        const { libBooks } = this.props;
        let books = null;

        if(Object(libBooks).length > 0)
        {
            books = libBooks.map((book) => {
                return (
                    <Link className='newBook' to={"/book/" + book.id} onClick={() => this.props.openCurrentBook(book)} key={book.id}>
                        <section>
                            <section className='newBookImg'>
                                <img src={book.imgURL}/>
                            </section>
                            <section className='newBookTitle'>
                                {book.name}
                            </section>
                        </section>
                    </Link>
                );
            });
        }
        else
        {
            books = <section className={"nobooks"}>Книг нет;(</section>;
        }

        return books;
    };

    render()
    {
        let books = this.renderBooks();

        return (
            <div>
                <HeaderContainer/>

                <section className="main">
                    <section className="path">
                        • > Библиотека
                    </section>

                    <section className="headerLib">
                        Библиотека.
                    </section>

                    <section className="objectOfBook">
                        <section className='object'>
                            <input type='submit' id="" value="Бизнес"/>
                        </section>
                        <section className='object'>
                            <input type='submit' id="" value="Здоровье"/>
                        </section>
                        <section className='object'>
                            <input type='submit' id="" value="Творчество"/>
                        </section>
                        <section className='object'>
                            <input type='submit' id="" value="Маркетинг"/>
                        </section>
                        <section className='object'>
                            <input type='submit' id="" value="Саморазвитие"/>
                        </section>
                    </section>

                    <section className="underlineLib">
                        <img src="/img/underline.png"/>
                    </section>

                    <section className="books">
                        {books}
                    </section>
                </section>

                <Footer/>
            </div>
        );
    }
}