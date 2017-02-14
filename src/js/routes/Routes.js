import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

//import components
import App from '../components/App';
import Home from '../components/pages/Home';
import SignUpPage from '../components/signup/container/SignUpPage';
import LogInPage from '../components/login/container/LogInPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="signup" component={SignUpPage}></Route>
        <Route path="login" component={LogInPage}></Route>
    </Route>
)
