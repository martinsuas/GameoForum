import React from 'react';
import '../../style.css'

class SiteBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu_items : [
                {key:"home", value:{name:"Home", link:""}},
                {key:"app", value:{name:"App", link:""}},
                {key:"register", value:{name:"Register", link:""}},
                {key:"about", value:{name:"About", link:""}},
            ],
            current: "home", // Default
        };
    }

    render() {
        return (
            <div id="h_navbar">
                {
                    this.state.menu_items.map
                    (
                    obj =>
                        <span id={this.state.module == obj.key ? "current":""}>
                            <a href={obj.value.link}>
                                {obj.value.name}
                            </a>
                        </span>
                    )
                }
            </div>
        )
    }
}

export default SiteBar;