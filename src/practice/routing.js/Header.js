import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
    <div>
        <h1>Portfolio</h1>
        <NavLink to="/" exact={true}>Home</NavLink>
        <NavLink to="/portfolio">Projects</NavLink>
    </div>
)

export default Header;