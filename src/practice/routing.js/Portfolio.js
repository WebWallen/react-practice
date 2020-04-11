import React from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <NavLink to="/portfolio/1">Awesome Design</NavLink><br></br>
        <NavLink to="/portfolio/2">Amazing Development</NavLink><br></br>
        <NavLink to="/portfolio/3">Awe-Inspiring Deployment</NavLink><br></br>
    </div>
)

export default Portfolio;