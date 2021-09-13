import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = (props) => {

    return (
        <div className="menu">
            <ul>
                <li>
                    <NavLink className="main-nav" activeClassName="main-nav-active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="main-nav" activeClassName="main-nav-active" to="/feature">Feature Free</NavLink>
                </li>
                <li>
                    <NavLink className="main-nav" activeClassName="main-nav-active" to="/feed">My Feed</NavLink>
                </li>
                <li>
                    <NavLink className="main-nav" activeClassName="main-nav-active" to="/search">Search</NavLink>
                </li>
                <li>
                    <NavLink className="main-nav" activeClassName="main-nav-active" to="/streaming">Streaming Channels</NavLink>
                </li>
                <li>
                    <NavLink className="main-nav" activeClassName="main-nav-active" to="/settings">Settings</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;