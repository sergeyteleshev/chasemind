import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import storeApp from './reducers';
import { AppContainer } from 'react-hot-loader';
/*eslint no-unused-vars:0*/
import {Route, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AppController from "./containers/AppContainer";

const history = createHistory();
const middleware = [thunkMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(storeApp, composeEnhancers(applyMiddleware(...middleware)));

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