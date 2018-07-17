import React from 'react';
import '../../../style.css'

function Forum(props) {
    return(
        <div className="forum">
            <button
                onClick={() => props.handleClick(1, "forum:" + props.forumId)}>
                {props.name}
            <span>{props.description}</span>
            </button>
            <div>

            </div>
        </div>
    );
}

class Forums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            forums: [],
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
                        forums: result,
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
        const {error, isLoaded, forums} = this.state;
        if (error) {
            return <div>Error: {error.message}<p/></div>
        }
        else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="forums">
                    {forums.map(
                        forum =>
                            <Forum key={forum.forumId}
                                   forumId={forum.forumId}
                                   name={forum.name}
                                   description={forum.description}
                                   handleClick={this.state.handleClick}
                            />
                    )}
                </div>
            );
        }
    }
}

export default Forums;