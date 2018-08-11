import React from 'react';
import '../../../style.css';
import {getDateTime} from './../../util/DateUtil';

function Message(props) {
    return(
        <div className="message">
            <span>
                <a onClick={() => props.handleClick(3, props.posterId)}>
                    {props.poster}
                </a>
            </span>
            <span>
                {props.message}
            </span>
            <span>
                {getDateTime(props.postingTime)}
            </span>
        </div>
    );
}

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            messages: [],
            url:props.url,
            handleClick: props.handleClick,
        }
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        messages: result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, messages} = this.state;
        if (error) {
            return <div>Error: {error.message}<p/></div>
        }
        else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="messages">
                    <div className="message" id="column_header">
                        <span>User</span>
                        <span>Message</span>
                        <span>Posted at:</span>
                    </div>
                    {messages.map(
                        message =>
                            <Message key={message.messageId}
                                     threadId={message.threadId}
                                     poster={message.poster}
                                     posterId={message.posterId}
                                     message={message.message}
                                     postingTime={message.postingTime}
                                     handleClick={this.state.handleClick}
                            />
                    )}
                </div>
            );
        }
    }
}
export default Messages;