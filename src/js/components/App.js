import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import Footer from './footer/Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <Navigation />

                    {this.props.children}
                </div>

                <Footer />
            </div>
        );
    }
}

