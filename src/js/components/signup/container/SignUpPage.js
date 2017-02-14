import React, { Component } from 'react';
import SignUpForm from '../presentation/SignUpForm';

import { userSignUpRequest } from '../actions/SignUpActions'
import { addMessage} from '../../messages/actions/messageActions';

import { connect } from 'react-redux';

class SignUpPage extends Component{
    render(){
        const { userSignUpRequest, addMessage } = this.props;

        return(
            <div class="row">
                <div class="col-md-5 col-md-offset-4">
                    <SignUpForm userSignUpRequest={userSignUpRequest} addMessage={addMessage} />
                </div>
            </div>
        );
    }
}


SignUpPage.propTypes = {
    userSignUpRequest: React.PropTypes.func.isRequired,
    addMessage: React.PropTypes.func.isRequired
}

export default connect(null, { userSignUpRequest, addMessage })(SignUpPage);