import React from 'react';
import './App.css'
import { Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit expense component 
  </div>
);

const HelpPage = () => (
  <div>
    This is from the help page
  </div>
)

const NotFoundPage = () => (
  <div>
    {/* Links eliminate full page refresh, merely swaps in new content */}
    404 - <Link to="/">Go Home</Link>
  </div>
)

// Header isn't in Switch because we want it to appear in every component
const Header = () => (
  <header>
    <h1>Expensify</h1>
    {/* Navlink is identical to Link but better as we can add style props -- add exact so it only affects one route at a time */}
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/add" activeClassName="is-active">Add Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
)

// Blank slate as we are moving on to a different project (preserved previous one inside the practice folder)

export default function App() {
  return (
    <>
     <Header />
     <Switch>
     {/* Exact avoids accidental loading of one app on top of another */}
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/add" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      {/* Switch allows us to add Not Found Page if URL doesn't match a path */}
      <Route component={NotFoundPage} />
     </Switch>
    </>

  )

}
