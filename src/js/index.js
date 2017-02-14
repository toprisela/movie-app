import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import jwt from 'jsonwebtoken';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import routes from './routes/Routes';
import reducers from './reducers';

import { setAuthorizationToken } from './utils/authorizationToken';
import { setCurrentUser } from './components/login/actions/loginActions';

// window.devToolsExtension ? window.devToolsExtension() : f => f --> initialize dev tools extension plugin for browser
const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));    
}


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('container')
);