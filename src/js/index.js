import React from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './components/App';
import { Router, browserHistory } from 'react-router';
import routes from './components/routes/Routes';

ReactDOM.render(
    <Router history={browserHistory}>{routes}</Router>,
    document.getElementById('container')
);