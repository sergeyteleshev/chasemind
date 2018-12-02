import React, { Component } from 'react';
import Footer from "./Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import {Link} from "react-router-dom";

export default class Library extends Component {
    componentWillMount()
    {
        this.props.fetchBooks();
        this.props.fetchSubjects();
    }

    renderBooks()
    {
        const { libBooks, sortId } = this.props;
        let books = null;

        if(Object(libBooks).length > 0)
        {
            books = libBooks.map((book) => {
                if(book.subject === sortId || sortId === 0)
                {
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
                }
            });
        }
        else
        {
            books = <section className={"nobooks"}>Книг нет;(</section>;
        }

        return books;
    };

    renderSubjects()
    {
        const { subjects } = this.props;
        let subjectsHtml = null;

        if(Object(subjects).length > 0)
        {
            subjectsHtml = subjects.map((subject) => {
                return (
                    <section className='object'>
                        <input onClick={() => this.props.sortBooks(subject.id)} type='submit' key={subject.id} id={subject.id} value={subject.subject}/>
                    </section>
                );
            });
        }
        else
        {
            subjectsHtml = <section className={"nosubjects"}>Тематик книг нет;(</section>;
        }

        return subjectsHtml;
    }

    render()
    {
        let books = this.renderBooks();
        let subjects = this.renderSubjects();

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
                            <input onClick={() => this.props.sortBooks(0)} type='submit' key={0} id={0} value={"Все"}/>
                        </section>
                        {subjects}
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