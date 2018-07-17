import React from 'react';
import '../../../style.css';

function Message(props) {
    return(
        <div className="message">
            <span>
                <a href={props.userLink}>{props.user}</a>
            </span>
            <span>
                {props.message}
            </span>
            <span>
                {props.postingTime}
            </span>
        </div>
    );
}

function Messages(props) {
    return (
        <div className="messages">
            <div className="message" id="column_header">
                <span>Poster</span>
                <span>Message</span>
                <span>Posted at</span>
            </div>
            {props.messages.map(
                message =>
                    <Message key={message.id}
                             postingTime={message.postingTime}
                             user={message.user}
                             userLink={message.userLink}
                             message={message.message}
                    />
            )}
        </div>
    );
}

export default Messages;