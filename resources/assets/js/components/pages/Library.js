import React, { Component } from 'react';
import Footer from "../Footer";
import HeaderContainer from "../../containers/HeaderContainer";
import {Link} from "react-router-dom";
import {BOOK_LINK, LIBRARY_LINK} from "../../consts/pageLinks";

export default class Library extends Component {
    componentDidMount()
    {
        this.props.fetchBooks();
        const subjects = this.props.fetchSubjects();
        let { subject } = this.props.match.params;

        if(subjects.length > 0)
        {
            subjects.map((subjectMap) => {
                console.log(subjectMap);
                if(subjectMap.subject.toLowerCase() === subject.toLowerCase())
                {
                    this.props.sortBooks(subjectMap.id);
                }
            });
        }
    }

    sortBooks(subject)
    {
        this.props.sortBooks(subject.id);
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
                        <Link className='newBook' to={BOOK_LINK + "/" + book.id} onClick={() => this.props.openCurrentBook(book)} key={book.id}>
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
        const subjectSelectedClassName = "subjectSelected";

        if(Object(subjects).length > 0)
        {
            subjectsHtml = subjects.map((subject) => {
                if(this.props.sortId === subject.id)
                {
                    return (
                        <section className='object'>
                            <Link to={LIBRARY_LINK + "/" + subject.subject.toLowerCase()} className={subjectSelectedClassName} onClick={() => this.sortBooks(subject)} key={subject.id} id={subject.id}>{subject.subject}</Link>
                        </section>
                    );
                }
                else
                {
                    return (
                        <section className='object'>
                            <Link className={"objectLink"} to={LIBRARY_LINK + "/" + subject.subject.toLowerCase()} onClick={() => this.sortBooks(subject)} key={subject.id} id={subject.id}>{subject.subject}</Link>
                        </section>
                    );
                }
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
        const subjectSelectedClassName = "subjectSelected";
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
                            {
                                this.props.sortId === 0 ?
                                    <Link to={LIBRARY_LINK} className={subjectSelectedClassName} onClick={() => this.sortBooks({id: 0, subject: "Все"})} type='submit' key={0} id={0}>Все</Link>
                                        :
                                    <Link className={"objectLink"} to={LIBRARY_LINK} onClick={() => this.sortBooks({id: 0, subject: "Все"})} type='submit' key={0} id={0}>Все</Link>
                            }
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