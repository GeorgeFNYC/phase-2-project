import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(){
    return (
        <div>
            <NavLink
                to='/'
                exact
                >
                Home
            </NavLink>
            <NavLink
                to='/favorites'
                exact
                >
                Favorites
            </NavLink>
        </div>
    )
}

export default NavBar;