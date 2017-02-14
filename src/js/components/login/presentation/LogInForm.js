import React, { Component } from 'react';
import InputGroup from '../../common/InputGroup';
import validateInput from '../../../../../server/shared/validations/login';

class LogInForm extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false
        };
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    isValid() {
        const { email, password } = this.state;

        const { errors, isValid } = validateInput({ email, password });

        if (!isValid) {
            this.setState({
                errors
            });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({
                errors: {},
                isLoading: true
            });

            const { email, password } = this.state;

            this.props.login({ email, password }).then(
                (res) => { this.context.router.push('/') },
                (err) => { console.log(err); this.setState({ errors: err.data.errors, isLoading: false }) }
            );
        }
    }

    render() {
        const {errors, email, password, isLoading} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Log In</h1>

                { errors.form && <div className="alert alert-danger">{ errors.form }</div> }

                <InputGroup
                    field="email"
                    label="Email"
                    value={email}
                    error={errors.email}
                    onChange={this.onChange}
                />

                <InputGroup
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    type="password"
                    onChange={this.onChange}
                />

                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={isLoading}>Log In</button>
                </div>
            </form>
        );
    }
}

LogInForm.propTypes = {
    login: React.PropTypes.func.isRequired
}

LogInForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default LogInForm;