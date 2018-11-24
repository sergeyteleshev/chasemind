import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storeApp from '../reducers';
import { AppContainer } from 'react-hot-loader';
import Contact from './pages/Contact';
import Main from './pages/Main';
import Dontwork from './pages/Dontwork';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Subscription from './pages/Subscription';

/*eslint no-unused-vars:0*/
import {Route, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LibraryContainer from "../containers/LibraryContainer";
import BookContainer from "../containers/BookContainer";
const history = createHistory();
const middleware = [thunkMiddleware];
let store = createStore(storeApp, applyMiddleware(...middleware));

export default class App extends Component {
    render()
    {
        return <AppContainer>
            <Provider store={store}>
                <Router history={history}>
                    <div>
                        <Route exact path='/' name={"main"} component={Main}/>
                        <Route exact path='/contact' name={"contact"} component={Contact}/>
                        <Route exact path='/book/:id' name={"book"} component={BookContainer}/>
                        <Route exact path='/dontwork' component={Dontwork}/>
                        <Route exact path='/lib' component={LibraryContainer}/>
                        <Route exact path='/sub' component={Subscription}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/reg' component={Registration}/>
                    </div>
                </Router>
            </Provider>
        </AppContainer>
    }
}