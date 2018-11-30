import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storeApp from './reducers';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
/*eslint no-unused-vars:0*/
import {Redirect, Route, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const middleware = [thunkMiddleware];

let authToken = localStorage.getItem('authToken');

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

render(App);