import React, { Component } from 'react';
import { validateInput } from '../../../../server/shared/validations/signup';
import InputGroup from '../common/InputGroup';


export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            submitIsLoading: false
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors, submitIsLoading: false });
        }

        return isValid;
    }

    onSubmit(e) {
        this.setState({ errors: {}, submitIsLoading: true });
        e.preventDefault();

        if (this.isValid()) {
            this.props.userSignUpRequest(this.state).then(
                () => {
                    this.context.router.push('/');
                 },
                ({ data }) => this.setState({ errors: data, submitIsLoading: false })
            );
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>Join our community!</h1>

                <InputGroup
                    field="email"
                    value={this.state.email}
                    label="Email"
                    error={errors.email}
                    onChange={this.onChange.bind(this)}
                />

                <InputGroup
                    field="password"
                    value={this.state.password}
                    label="Password"
                    error={errors.password}
                    onChange={this.onChange.bind(this)}
                />

                <InputGroup
                    field="passwordConfirmation"
                    value={this.state.passwordConfirmation}
                    label="Confirm Password"
                    error={errors.passwordConfirmation}
                    onChange={this.onChange.bind(this)}
                />

                <div class="form-group">
                    <button disabled={this.state.submitIsLoading} class="btn btn-primary btn-lg">
                        Sign Up!
                   </button>
                </div>
            </form>
        );
    }
}

SignUpForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

SignUpForm.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired
}