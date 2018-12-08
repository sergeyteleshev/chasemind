import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storeApp from '../reducers';
import { AppContainer } from 'react-hot-loader';
import Contact from './pages/Contact';
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
import {getCookie} from "../helpers/cookies";
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
                        <Route exact path='/contact' name={"contact"} component={ContactContainer}/>
                        <Route exact path='/book/:id' name={"book"} component={BookContainer}/>
                        <Route exact path='/dontwork' component={Dontwork}/>
                        <Route exact path='/lib' component={LibraryContainer}/>
                        <Route exact path='/lib/:subject' component={LibraryContainer}/>
                        <Route exact path='/sub' component={SubscriptionContainer}/>
                        <Route exact path='/login' component={LoginController}/>
                        <Route exact path='/reg' component={RegistrationContainer}/>
                    </ScrollToTop>
                </Router>
            </Provider>
        </AppContainer>
    }
}