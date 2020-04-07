import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
      <h1>Expensify</h1>
      {/* Navlink is identical to Link but better as we can add style props -- add exact so it only affects one route at a time */}
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/add" activeClassName="is-active">Add Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

export default Header;