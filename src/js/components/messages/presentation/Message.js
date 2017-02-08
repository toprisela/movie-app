import React, { Component } from 'react';
import classnames from 'classnames';
import * as messageTypes from '../../../enums/messageTypes';

class Message extends Component {
    onClick(){
        this.props.deleteMessage(this.props.message.id);
    }

    render() {
        const { id, type, text } = this.props.message;
        return (
            <div class={classnames('alert',{
                'alert-success': type === messageTypes.SUCCESS,
                'alert-danger': type === messageTypes.ERROR
            })}>
            <button onClick={this.onClick.bind(this)} class="close"><span>&times;</span></button>
                {text}
            </div>
        );
    }
}

Message.propTypes = {
    message: React.PropTypes.object.isRequired,
    deleteMessage: React.PropTypes.func.isRequired
};

export default Message;