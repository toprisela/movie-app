import React, { Component } from 'react';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>Join our community!</h1>

                <div class="form-group">
                    <label for="email" class="control-label">Email</label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                        name="email"
                        class="form-control"
                        id="email"
                    />
                </div>
                <div class="form-group">
                    <label for="password" class="control-label">Password</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}
                        name="password"
                        class="form-control"
                        id="password"
                    />
                </div>
                <div class="form-group">
                    <label for="passwordConfirmation" class="control-label">Confirm password</label>
                    <input
                        type="password"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange.bind(this)}
                        name="passwordConfirmation"
                        class="form-control"
                        id="passwordConfirmation"
                    />
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-lg">
                        Sign Up!
                   </button>
                </div>
            </form>
        );
    }
}