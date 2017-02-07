import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import routes from './components/routes/Routes';

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>
    ,
    document.getElementById('container')
);