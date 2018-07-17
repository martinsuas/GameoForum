import React from 'react';
import '../../style.css';

function NavigationItem(props) {
    return (
        <button id={props.current?"current":""} onClick={props.onClick}>
            {props.text}
        </button>
    );
}
function NavigationBar(props) {
    const items = props.modules.map((element, index) => {
        return (
            <NavigationItem
                text={element}
                onClick={() => props.handleClick(index) }
                current={props.current === index}
            />
        )
    }, this);

    return (
        <div id="navigationbar">
            {items}
        </div>
    )
}

export default NavigationBar;