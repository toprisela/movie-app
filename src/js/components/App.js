import React, { Component } from 'react';
import Navigation from './navigation/Navigation';
import Footer from './pages/Footer';
import MessageList from './messages/container/MessageList';

export default class App extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <Navigation />
                    <MessageList />
                    {this.props.children}
                </div>

                <Footer />
            </div>
        );
    }
}

