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

    getMaterial(bookId, type, demo = false)
    {
        this.props.selectCurrentBookType(type);

        if(this.props.authorized && this.props.user.daysLeft > 0)
        {
            return this.props.getMaterialSubmit(bookId, type, demo);
        }
        else
        {
            type += "Demo";
            this.props.selectCurrentBookType(type);
            return this.props.showBookDialog();
        }
    }

    renderModelWindow()
    {
        if(!this.props.isBookModalWindowShowing)
            return null;

        if(this.props.authorized && this.props.user.daysLeft === 0)
        {
            return (
                <section className="modalWindow">
                    <section className="formModalWindow">
                        <section className="modalBar">
                            <section className="closeModalBar"><img onClick={() => this.props.hideBookDialog()} src="/img/cancel.svg"/></section>
                        </section>

                        <section className="headerFormModal">

                        </section>

                        <section className="modalWindowContent">
                            <section className="modalWindowText">
                                У вас осталось <span>{this.props.user.daysLeft} дней</span> подписки.
                                <br/>
                                Для того чтобы иметь доступ к материалам
                                <br/>
                                <span>нужно её купить.</span>
                                <br/>
                                Сейчас вы можете:
                            </section>

                            <section className="signInOutLinks">
                                <input type="submit" className="modalDemo" onClick={() => this.props.getMaterialSubmit(this.props.currentBook.id, this.props.currentBookTypeSelected, true)} value="Cкачать демо"/>
                                <Link to={"/sub"}><input type="submit" className="buyFormModal" value="Полный доступ"/></Link>
                            </section>

                            {/*<section className="loginLink">*/}
                                {/*<Link to={"/login"}>У меня уже есть учётная запись</Link>*/}
                            {/*</section>*/}

                            {/*<section className="subLink">*/}
                            {/*<Link to={"/login"}>или получить <span>полный доступ</span></Link>*/}
                            {/*</section>*/}
                        </section>
                    </section>
                </section>
            );
        }

        return (
            <section className="modalWindow">
                <section className="formModalWindow">
                    <section className="modalBar">
                        <section className="closeModalBar"><img onClick={() => this.props.hideBookDialog()} src="/img/cancel.svg"/></section>
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
                        <input type="submit" className="modalDemo" value="Cкачать демо" onClick={() => this.props.getMaterialSubmit(this.props.currentBook.id, this.props.currentBookTypeSelected, true)}/>
                        <section className="signInOutLinks">
                            <Link to={"/reg"}><input className="modalRegister" type="submit" value="Регистрация"/></Link>
                            <Link to={"/sub"}><input type="submit" className="buyFormModal" value="Полный доступ"/></Link>
                        </section>

                        <section className="loginLink">
                            <Link to={"/login"}>У меня уже есть учётная запись</Link>
                        </section>

                        {/*<section className="subLink">*/}
                            {/*<Link to={"/login"}>или получить <span>полный доступ</span></Link>*/}
                        {/*</section>*/}
                    </section>
                </section>
            </section>
        );
    }

    render() {
        const currentBook = this.props.currentBook;
        let books = null;

        if(currentBook)
        {
               books = <section className="bookWrapper">
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
                               <span>ПРЕИМУЩЕСТВО</span> {Math.trunc(((currentBook.pagesBook / currentBook.pagesAbstarct).toFixed(2)) * 100)} %
                           </section>
                       </section>

                       <section className="bookButtonsMobile">
                           <input onClick={() => this.getMaterial(currentBook.id, 'read')} type="submit" value="Читать" id="linkOnTextMobile"/>
                           <input onClick={() => this.getMaterial(currentBook.id, 'listen')} type="submit" value="Слушать" id="linkOnAudioMobile"/>
                           <input onClick={() => this.getMaterial(currentBook.id, 'watch')} type="submit" value="Смотреть" id="linkOnVideoMobile"/>
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
                       <input onClick={() => this.getMaterial(currentBook.id, 'read')} type="submit" value="Читать" id="linkOnText"/>
                       <input onClick={() => this.getMaterial(currentBook.id, 'listen')} type="submit" value="Слушать" id="linkOnAudio"/>
                       <input onClick={() => this.getMaterial(currentBook.id, 'watch')} type="submit" value="Смотреть" id="linkOnVideo"/>
                   </section>
               </section>;
        }

        return (
            <div>
                {this.renderModelWindow()}

                <HeaderContainer/>

                <section className="main">
                    <section className="path">
                        • > Библиотека
                    </section>

                    {books}

                </section>

                <Footer/>
            </div>
        );
    }
}
