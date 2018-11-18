import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Dontwork extends Component {
    render() {
        return (
            <div>
                <section className="wrapper">
                    <section className="logo">
                        <img src="../../../localhost/img/logoWhite.png"></img>
                    </section>
                    <br/>
                    <section className="text">
                        <p>Просим прощения,</p>
                        <p>Сайт временно <span>не работает.</span></p>
                        <br/>
                        <p>Совсем скоро мы возобновим работу.</p>
                        <p><span>Правда, правда.</span></p>
                    </section>
                    <section className="links">
                        <section className="tableLinks">
                            <table>
                                <tr>
                                    <td>
                                        <p><a target="_blank" href="https://vk.com/chasemind">Вконтакте</a></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><a target="_blank"
                                              href="https://www.youtube.com/channel/UCL0UdndbjzmEKtyoktusfbA">YouTube</a>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p><a target="_blank" href="https://www.instagram.com/chasemind/">Instagram</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </section>
                    </section>
                </section>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Dontwork />, document.getElementById('root'));
}
