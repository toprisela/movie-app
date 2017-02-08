import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
import Message from '../presentation/Message';

//actions
import { deleteMessage } from '../actions/messageActions'

class MessageList extends Component {
    render() {
        const { deleteMessage } = this.props;

        const messages = this.props.messages.map(m =>
            <Message key={m.id} message={m} deleteMessage={deleteMessage} />
        );

        return (
            <div>
                {messages}
            </div>
        );
    }
}

MessageList.propTypes = {
    messages: React.PropTypes.array.isRequired,
    deleteMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        messages: state.messageReducer
    }
}

export default connect(mapStateToProps, { deleteMessage })(MessageList);