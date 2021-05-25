import React from 'react';
import {NavLink} from "react-router-dom";

const PageNavigate = () => {
    return (
        <ul>
            <li><NavLink to='todo'>ToDo</NavLink></li>
            <li><NavLink to='post'>Posts</NavLink></li>
            <li><NavLink to='album'>Albums</NavLink></li>
        </ul>

    )
}

export default PageNavigate
