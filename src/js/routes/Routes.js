import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

//import components
import App from '../components/App';
import Home from '../components/pages/Home';
import SignUpPage from '../components/signup/SignUpPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="signup" component={SignUpPage}></Route>
    </Route>
)
