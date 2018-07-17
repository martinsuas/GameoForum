import React from 'react';
import Header from './navigation/Header'
import App from './app/App'

class Site extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <p/>
                <App/>
            </div>
        );
    }
}

export default Site;