import React from "react";
import './NavBar.css'

import {NavLink} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink exact to='/'>
                Vending Machine
            </NavLink>
            <NavLink exact to='/oreos'>
                Oreos
            </NavLink>
            <NavLink exact to='/snickers'>
                Snickers
            </NavLink>
            <NavLink exact to='/twix'>
                Twix
            </NavLink>
        </nav>
    );
}

export default NavBar;