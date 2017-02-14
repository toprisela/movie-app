import React, { Component } from 'react';
import LogInForm from '../presentation/LogInForm';
import { connect } from 'react-redux';
import { login } from '../actions/loginActions';

class LogInPage extends Component {
    render() {
        const { login } = this.props;

        return (
            <div class="row">
                <div className="col-md-4 col-md-offset-4">
                    <LogInForm login={login}/>
                </div>
            </div>
        );
    }
}

LogInPage.prototypes = {
    login : React.PropTypes.func.isRequired
}

export default connect(null, { login })(LogInPage);