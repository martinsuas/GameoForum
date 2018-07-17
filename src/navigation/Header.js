import React from 'react';
import '../style.css';
import './header/SiteBar';
import SiteBar from "./header/SiteBar";

function Header(props) {
    return (
        <div id="header">
            <div id="h_logo">
                <a href="">
                    <img src={require('../resources/logo.png')} alt="Game-O Forums"/>
                </a>
            </div>
            <SiteBar/>
        </div>
    );
}

export default Header;