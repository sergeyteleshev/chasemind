import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import storeApp from '../reducers';
import { AppContainer } from 'react-hot-loader';
import Contact from './Contact';
import Main from './Main';
import Books from './Books';
import Dontwork from './Dontwork';
import Library from './Library';
import Login from './Login';
import Registration from './Registration';
import Subscription from './Subscription';

/*eslint no-unused-vars:0*/
import {Route, Router, BrowserRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
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
                        <Route exact path='/' component={Main}/>
                        <Route exact path='/contact' component={Contact}/>
                        <Route exact path='/books' component={Books}/>
                        <Route exact path='/dontwork' component={Dontwork}/>
                        <Route exact path='/lib' component={Library}/>
                        <Route exact path='/sub' component={Subscription}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/reg' component={Registration}/>
                    </div>
                </Router>
            </Provider>
        </AppContainer>
    }
}

if(document.getElementById('root'))
{
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}
