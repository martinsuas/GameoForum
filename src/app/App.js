import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
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
            views : [
                'forums',
                'threads',
                'messages',
                'users'
            ],
            module : 0, // default module
            view : 0,   // default view
            task: '',
        }
    }

    handleNavigationBarClick(i) {
        const modules = this.state.modules.slice();
        const views = this.state.views.slice();
        let view = 0;
        if (module === 1) {
            view = 3;
        }
        this.setState({
            modules: modules,
            views: views,
            view: view,
            module: i,
            task: this.task,
        });
    }

    render() {
        const content = (i) => {
            if (i === 0) { // Forum module
                return (
                    <Forums url={api_url + this.state.views[i] + this.state.task}/>
                );
            } else if (i === 1) {
                return (
                    <Threads url={api_url + this.state.views[i] + this.state.task}/>
                );
            } else if (i === 2) {
                return (
                    <Messages url={api_url + this.state.views[i] + this.state.task}/>
                );
            } else if (i == 3) {
                return (
                    null
                    //<Users url={api_url + this.state.views[i] + this.state.task}/>
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