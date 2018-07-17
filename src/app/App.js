import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Users from "./components/community/Users";
import Forums from './components/forum/Forums'
import Threads from "./components/forum/Threads";
import Messages from "./components/forum/Messages";

const api_url = "http://localhost:8080/gameoForum/webapi/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modules : [
                'Forum',
                'Community',
                'Profile'
            ],
            module : 0, // default module
            views : [
                'forums/',
                'threads/',
                'messages/',
                'users/'
            ],
            view : 0,   // default view
            command: '',
        }
    }

    handleNavigationBarClick(module) {
        let view = 0;
        if (module === 1) {
            view = 3;
        }
        this.setState({
            module: module,
            view: view,
            command: "",
        });
    }

    handleViewClick(view, command) {
        let module = 0;
        if (view === 3) {
            module = 1;
        }
        this.setState({
            module: module,
            view: view,
            command: command,
        });
    }

    render() {
        const s = this.state;
        const content = (i) => {
            if (i === 0) { // Forum module
                return (
                    <Forums url={api_url + s.views[i] + s.command}
                            handleClick={(view, command)=>this.handleViewClick(view, command)}
                    />
                );
            } else if (i === 1) {
                return (
                    <Threads url={api_url + s.views[i] + s.command}
                             handleClick={(view, command)=>this.handleViewClick(view, command)}
                    />
                );
            } else if (i === 2) {
                return (
                    <Messages url={api_url + s.views[i] + s.command}
                              handleClick={(view, command)=>this.handleViewClick(view, command)}
                    />
                );
            } else if (i == 3) {
                return (
                    <Users url={api_url + s.views[i] + s.command}
                              handleClick={(view, command)=>this.handleViewClick(view, command)}
                    />
                );
            }
            return null;
        };
        return (
            <div classID="app">
                <p/>
                <NavigationBar
                    modules={this.state.modules}
                    current={this.state.module}
                    handleClick={(i) => this.handleNavigationBarClick(i)}
                />
                <p/>
                {content(this.state.view)}
                <p/>
            </div>
        );
  }
}

export default App;