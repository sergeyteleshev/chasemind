import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, applyMiddleware as dispatch} from 'redux';
import thunkMiddleware from 'redux-thunk';
import storeApp from './reducers';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
/*eslint no-unused-vars:0*/
import {Redirect, Route, Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {fetchLoginViaRememberToken, testAlert} from "./actions";

const history = createHistory();
const middleware = [thunkMiddleware];

let rememberToken = localStorage.getItem('remember_token');

//todo чёто не работает пофиксить
if(rememberToken)
{
    const getUser = async () => {
        let user = await fetchLoginViaRememberToken(rememberToken);
        console.log(user);
    };

    getUser();
}

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