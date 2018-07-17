import React from 'react';
import '../../../style.css';

function Thread(props) {
    return(
        <div className="thread">
            <span>
                <a href={props.threadLink}>{props.title}</a>
            </span>
            <span>
                <a href={props.userLink}>{props.user}</a>
            </span>
            <span>
                {props.creationTime}
            </span>
        </div>
    );
}

function Threads(props) {
    return (
        <div className="threads">
            <div className="thread" id="column_header">
                <span>Title</span>
                <span>Author</span>
                <span>Created at</span>
            </div>
            {props.threads.map(
                thread =>
                    <Thread key={thread.id}
                            title={thread.title}
                            creationTime={thread.creationTime}
                            user={thread.user}
                            userLink={thread.userLink}
                            threadLink={thread.threadLink}
                    />
            )}
        </div>
    );
}

export default Threads;