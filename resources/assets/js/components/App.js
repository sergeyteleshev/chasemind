import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storeApp from '../reducers';
import { AppContainer } from 'react-hot-loader';
import Dontwork from './pages/Dontwork';

/*eslint no-unused-vars:0*/
import {Route, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LibraryContainer from "../containers/LibraryContainer";
import BookContainer from "../containers/BookContainer";
import RegistrationContainer from "../containers/RegistrationContainer";
import LoginController from "../containers/LoginContainer";
import MainContainer from "../containers/MainContainer";
import ContactContainer from "../containers/ContactContainer";
import SubscriptionContainer from "../containers/SubscriptionContainer";
import ScrollToTop from "./ScrollToTop";
import {
    ADD_BOOK,
    BOOK_LINK,
    CONTACT_LINK,
    LIBRARY_LINK,
    LOGIN_LINK, MIND_MAP,
    REGISTRATION_LINK,
    SUB_LINK
} from "../consts/pageLinks";
import AddBookContainer from "../containers/AddBookContainer";
import MindMapContainer from "../containers/MindMapContainer";
const history = createHistory();
const middleware = [thunkMiddleware];
let store = createStore(storeApp, applyMiddleware(...middleware));

export default class App extends Component {
    render()
    {
        return <AppContainer>
            <Provider store={store}>
                <Router history={history}>
                    <ScrollToTop className={"appRoutes"}>
                        <Route exact path='/' name={"main"} component={MainContainer}/>
                        <Route exact path={CONTACT_LINK} name={"contact"} component={ContactContainer}/>
                        <Route exact path={BOOK_LINK + '/:id'} name={"book"} component={BookContainer}/>
                        <Route exact path='/dontwork' component={Dontwork}/>
                        <Route exact path={LIBRARY_LINK} component={LibraryContainer}/>
                        <Route exact path={LIBRARY_LINK + "/:subject"} component={LibraryContainer}/>
                        <Route exact path={SUB_LINK} component={SubscriptionContainer}/>
                        <Route exact path={LOGIN_LINK} component={LoginController}/>
                        <Route exact path={REGISTRATION_LINK} component={RegistrationContainer}/>
                        <Route exact path={ADD_BOOK} component={AddBookContainer}/>
                        <Route exact path={MIND_MAP + '/:id'} name={"mindMap"} component={MindMapContainer}/>
                    </ScrollToTop>
                </Router>
            </Provider>
        </AppContainer>
    }
}