import React from 'react';
import '../../../style.css';
import {getDateTime} from './../../util/DateUtil';

function Thread(props) {
    return(
        <div className="thread">
            <span>
                <a onClick={() => props.handleClick(2, "thread:" + props.threadId)}>
                    {props.title}
                </a>
            </span>
            <span>
                <a onClick={() => props.handleClick(3, props.authorId)}>
                    {props.author}
                </a>
            </span>
            <span>
                {getDateTime(props.creationTime)}
            </span>
        </div>
    );
}

class Threads extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            threads: [],
            url: props.url,
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
                        threads: result,
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
        const {error, isLoaded, threads} = this.state;
        if (error) {
            return <div>Error: {error.message}<p/></div>
        }
        else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="threads">
                    <div className="thread" id="column_header">
                        <span>Title</span>
                        <span>User</span>
                        <span>Created at:</span>
                    </div>
                    {threads.map(
                        thread =>
                            <Thread key={thread.threadId}
                                    threadId={thread.threadId}
                                    title={thread.title}
                                    author={thread.author}
                                    authorId={thread.authorId}
                                    creationTime={thread.creationTime}
                                    handleClick={this.state.handleClick}
                            />
                    )}
                </div>
            );
        }
    }
}

export default Threads;