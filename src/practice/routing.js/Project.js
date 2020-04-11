import React from 'react';
import { NavLink } from 'react-router-dom';

const Project = (props) => (
    <div>
        This is portfolio piece #{props.match.params.id} <br></br>
        <NavLink to="/portfolio">Go Back to Portfolio Page</NavLink>
    </div>
)

export default Project;