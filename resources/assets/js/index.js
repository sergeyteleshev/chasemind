import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import storeApp from './reducers';
import { AppContainer } from 'react-hot-loader';
/*eslint no-unused-vars:0*/
import {Redirect, Route, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AppController from "./containers/AppContainer";

const history = createHistory();
const middleware = [thunkMiddleware];

let store = createStore(storeApp, applyMiddleware(...middleware));

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router history={history}>
                    <Route path='/' component={Component}/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    )
};

render(AppController);