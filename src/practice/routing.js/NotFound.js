import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
    <div>
        Sorry, that page doesn't exist. Go back to <NavLink to="/">home</NavLink>.
    </div>
)

export default NotFound;