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

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...

        }) : compose;

let store = createStore(storeApp, composeEnhancers(applyMiddleware(...middleware)));

if (window.devToolsExtension) window.devToolsExtension.updateStore(store);

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

//
// if(NODE_ENV==='development') {
//
//     //LOGGER
//
//
//     console.log(NODE_ENV);
//
//     store.subscribe(()=>console.log(store.getState()));
//
//     //HOT MODULE
//
//     render(App);
//     if (module.hot) {
//         module.hot.accept('./components/App', () => { render(App) })
//     }
// }