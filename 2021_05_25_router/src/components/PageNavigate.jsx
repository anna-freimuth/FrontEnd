import React from 'react';
import {NavLink} from "react-router-dom";

const PageNavigate = () => {
    return (
        <div className="container-md my-3 w-50 mx-auto">
            <ul className="list-group">
                <li><NavLink to='todo'>ToDo</NavLink></li>
                <li><NavLink to='post'>Posts</NavLink></li>
                <li><NavLink to='album'>Albums</NavLink></li>
            </ul>
        </div>
    )
}

export default PageNavigate
