import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock.jsx';
import Tabs from './frontend/tabs.jsx';

const Root = ()=>{
    return(
        <div>
            <Clock/>
            <Tabs/>
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Root/>, root);
});