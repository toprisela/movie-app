import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

//import components
import App from '../App';
import Home from '../main/Home';
import SignUpPage from '../signup/SignUpPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="signup" component={SignUpPage}></Route>
    </Route>
)
