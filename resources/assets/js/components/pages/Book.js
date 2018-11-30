import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Footer from "./Footer";
import HeaderContainer from "../../containers/HeaderContainer";

export default class Book extends Component {
    componentWillMount()
    {
        const { id } = this.props.match.params;
        let book = this.props.currentBook;

        if(Object.keys(book).length === 0 && book.constructor === Object)
        {
            this.props.fetchBook(id);
        }

        console.log(book);
    }

    render() {
        const currentBook = this.props.currentBook;
        let book = null;

        if(currentBook)
        {
               book = <section className="bookWrapper">
                   <section className="topOfBook">
                       <section className="topOfBookImg">
                            <img src={currentBook.imgURL}/>

                       </section>

                       <section className="topOfBookText">
                           <section className="topOfBookHeader">
                               {currentBook.name}
                           </section>

                           <section className="topOfBookSlogan">
                               {currentBook.slogan}
                           </section>

                           <section className="topOfBookSloganEng">
                               {currentBook.sloganENG}
                           </section>

                           <section className="topOfBookAuthor">
                               {currentBook.author}
                           </section>

                           <section className="topOfBookPublisher">
                               {currentBook.publisher}
                           </section>
                       </section>

                       <section className="middleOfBook">
                           <section className="middleOfBookPages">
                               <section className="firstRow">
                                   Оригинал книги <span>{currentBook.pagesBook}</span>
                               </section>

                               <section className="secondRow">
                                   Конспект книги <span>{currentBook.pagesAbstarct}</span>
                               </section>
                           </section>

                           <section className="middleOfBookAdvantage">
                               <span>ПРЕИМУЩЕСТВО</span> {Math.round(currentBook.pagesAbstarct /currentBook.pagesBook) * 100 }%
                           </section>
                       </section>

                       <section className="bookButtonsMobile">
                           <input type="submit" value="Читать" id="linkOnTextMobile"/>
                           <input type="submit" value="Слушать" id="linkOnAudioMobile"/>
                           <input type="submit" value="Смотреть" id="linkOnVideoMobile"/>
                       </section>

                       <section className="bottomOfBook">
                           <section className="bottomOfBookHeader">
                               Описание.
                           </section>

                           <section className="bottomOfBookDiscription">
                               {currentBook.desc}
                           </section>
                       </section>
                   </section>

                   <section className="bookButtons">
                       <input type="submit" value="Читать" id="linkOnText"/>
                       <input type="submit" value="Слушать" id="linkOnAudio"/>
                       <input type="submit" value="Смотреть" id="linkOnVideo"/>
                   </section>
               </section>;
        }

        return (
            <div>
                <section className="modalWindow">
                    <section className="formModalWindow">
                        <section className="modalBar">
                            <section className="closeModalBar"><img src="/img/cancel.svg"/></section>
                        </section>

                        <section className="headerFormModal">

                        </section>

                        <section className="modalWindowContent">
                            <section className="modalWindowText">
                                Полная версия конспекта доступна только
                                <br/>
                                <span>пользователям с подпиской.</span>
                                <br/>
                                Сейчас вы можете:
                            </section>
                            <input type="submit" className="modalDemo" value="Cкачать демо"/>
                            <section className="signInOutLinks">
                                <a href="/registration"><input className="modalRegister" type="submit"
                                                               value="Регистрация"/></a>
                                <a href="/sub"><input type="submit" className="buyFormModal" value="Полный доступ"/></a>
                            </section>

                            <section className="loginLink">
                                <a href="/login">У меня уже есть учётная запись</a>
                            </section>

                            <section className="subLink">
                                <a href="/login">или получить <span>полный доступ</span></a>
                            </section>
                        </section>
                    </section>
                </section>

                <HeaderContainer/>

                <section className="main">
                    <section className="path">
                        • > Библиотека
                    </section>

                    {book}

                </section>

                <Footer/>
            </div>
        );
    }
}
