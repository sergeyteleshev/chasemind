import React, { Component } from 'react';
import {Link} from "react-router-dom";
import HeaderContainer from '../../containers/HeaderContainer';
import Footer from "../Footer";
import {LIBRARY_LINK, REGISTRATION_LINK, SUB_LINK} from "../../consts/pageLinks";

export default class Main extends Component {
    componentWillMount() {
        this.props.fetchSubjects();
    }

    renderSubjects()
    {
        const { subjects } = this.props;
        let subjectsHtml = null;

        if(Object(subjects).length > 0)
        {
            subjectsHtml = subjects.map((subject) => {
                return (
                    <Link to={"lib/" + subject.subject} key={subject.id}>
                        <li id={subject.id} onClick={() => this.props.sortBooks(subject.id)} className='mainSubject'>
                            {subject.subject}
                        </li>
                    </Link>
                );
            });
        }
        else
        {
            subjectsHtml = <section className={"nosubjects"}>Тематик книг нет;(</section>;
        }

        return subjectsHtml;
    }

    render() {
        let subjects = this.renderSubjects();

        return (
            <div className="container">
                {/*<section className="modalWindow">*/}
                    {/*<section className="formModalWindow">*/}
                        {/*<section className="modalBar">*/}
                            {/*<section className="closeModalBar"><span>x</span></section>*/}
                        {/*</section>*/}

                        {/*<section className="headerFormModal">*/}

                        {/*</section>*/}

                        {/*<section className="modalWindowContent">*/}

                        {/*</section>*/}
                    {/*</section>*/}
                {/*</section>*/}

                <section className="mainTop">
                    <HeaderContainer/>

                    <section className="chooseObject">
                        <section className="main">
                            <section className="chooseObjectWrapper">
                                <section className="chooseObjectLeftPart">
                                    Конспекты книг по темам
                                </section>

                                <section className="chooseObjectRightPart">
                                    <ul>
                                        {subjects}
                                    </ul>
                                </section>
                            </section>

                            <section className="useTime">
                                Используй время продуктивно. <br/>
                                Узнавай самые главные мысли полезных книг.
                            </section>

                            <section className="chooseObjectButtons">
                                <section className="tryFreeButton">
                                    <Link to={REGISTRATION_LINK}>
                                        <button>Попробовать<br/>бесплатно</button>
                                    </Link>
                                </section>

                                <section className="buySubButton">
                                    <Link to={SUB_LINK}><input type="submit" value="Оформить подписку"/></Link>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>

                <section className="discrBook">
                    <section className="main">
                        <section className="discrBookLeftPart">
                            <img src="img/book.png"/>
                        </section>

                        <section className="discrBookRightPart">
                            <section className="discrBookHeader">
                                Путь к продуктивному чтению.
                            </section>

                            <section className="discrBookDiscr">
                                <p>
                                    Сервис Chase Mind – это огромная работа команды

                                    профессиеоналов, преоделанная для того, чтобы создать

                                    для Вас место длея получения интересной, и главное –

                                    полезной информации из мира литературы.
                                </p>


                                <p>
                                    Читайте продуктивнее, не тратьте время на «воду», открытвайте для себя новое и
                                    неизведанное.
                                </p>

                                <p>
                                    <span>
                                        Вместе с Chase Mind, вы с легкостью сможете стать
                                        лучшей весией самого себя!
                                    </span>
                                </p>

                                <p>
                                    <Link to={LIBRARY_LINK}><input type="submit" value="Подробнее..."/></Link>
                                </p>
                            </section>
                        </section>
                    </section>
                </section>

                <section className="reasonsToJoin">
                    <section className="reasonsWrapper">
                        <section className="reason">
                            <section className="reasonImg">
                                <img src="img/2.png"/>
                            </section>

                            <section className="reasonRightPart">
                                <section className="reasonHeader">
                                    Читай, слушай, смотри
                                </section>

                                <section className="reasonDiscr">
                                    Конспекты книг
                                    <br/>
                                    предсталвены в удобных для
                                    <br/>
                                    форматах
                                </section>
                            </section>
                        </section>

                        <section className="reason">
                            <section className="reasonImg">
                                <img src="img/1.png"/>
                            </section>

                            <section className="reasonRightPart">
                                <section className="reasonHeader">
                                    Экономь своё время
                                </section>

                                <section className="reasonDiscr">
                                    Конспеткы повышают
                                    <br/>
                                    эффективность и скорость
                                    <br/>
                                    чтения.
                                </section>
                            </section>
                        </section>

                        <section className="reason">
                            <section className="reasonImg">
                                <img src="img/3.png"/>
                            </section>

                            <section className="reasonRightPart">
                                <section className="reasonHeader">
                                    Бери самое полезное
                                </section>

                                <section className="reasonDiscr">
                                    Важная информация из книг.
                                    <br/>
                                    Никакой «воды» – только
                                    <br/>
                                    нужное.
                                </section>
                            </section>
                        </section>
                    </section>
                </section>

                <section className="newBooks">
                    <section className="newBooksWrapper">
                        <section className="newBooksHeader">
                            Новинки книг.
                        </section>

                        <section className="newBooksDiscr">
                            Никогда не поздно пробежать свой первый ультрамарафон
                            <br/>
                            или освоить интернет-маркетинг в интернете. Об этом и
                            <br/>
                            многом другом в новинках конспектов.
                        </section>

                        <section className="newBooksCourusel">

                        </section>
                    </section>
                </section>

                <section className="subOnMailing">
                    <section className="subOnMailingWrapper">
                        <section className="subOnMailingHeader">
                            Подписка на рассылку.
                        </section>

                        <section className="subOnMailingDiscr">
                            Никакого спама – на ваш e-mail будет присылаться только полезный
                            <br/>
                            контент о саморазвитии: новые знания, интересные новости из мира книг,
                            <br/>
                            информация о новых конспектах на сайте
                        </section>

                        <section className="subOnMailingEmail">
                            <input className="emailInput" type="text" placeholder="Ваш e-mail"/>
                        </section>

                        <section className="subOnMailingSubmit">
                            <input type="submit" value="Подписаться"/>
                        </section>
                    </section>
                </section>

                <section className="lastStep">
                    <section className="lastStepHeader">
                        Последний шаг.
                    </section>

                    <section className="lastStepDiscr">
                        Все начинается с первого уверенного решения.
                        <br/>
                        Это легче, чем может показаться!
                    </section>

                    <section className="lastStepSubmit">
                        <Link to={REGISTRATION_LINK}>
                            <button>
                                Попробовать
                                <br/>
                                бесплатно
                            </button>
                        </Link>
                    </section>
                </section>

                <Footer/>
            </div>
        );
    }
}