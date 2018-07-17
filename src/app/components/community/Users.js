import React from 'react';
import '../../../style.css';

function User(props) {
    return(
        <div className="user">
            <span>
                <a onClick={() => props.handleClick(3, props.username)}>
                    {props.username}
                </a>
            </span>
            <span>
                {props.gender}
            </span>
            <span>
                {props.registrationTime}
            </span>
        </div>
    );
}

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: [],
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
                        users: result,
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
        const {error, isLoaded, users} = this.state;
        if (error) {
            return <div>Error: {error.message}<p/></div>
        }
        else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="users">
                    <div className="user" id="column_header">
                        <span>User</span>
                        <span>Gender</span>
                        <span>Joined at:</span>
                    </div>
                    {users.map(
                        user =>
                            <User key={user.userId}
                                    userId={user.userId}
                                    username={user.username}
                                    gender={user.gender}
                                    registrationTime={user.registrationTime}
                                    handleClick={this.state.handleClick}
                            />
                    )}
                </div>
            );
        }
    }
}

export default Users;