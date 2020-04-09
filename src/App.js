import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import Help from './components/Help';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <>
     {/* Not in Switch because we want the navigation menu and header to display on all components */}
     <Header />
     {/* Routes */}
     <Switch>
        {/* Exact avoids accidental loading of one component on top of another */}
        <Route exact path="/" component={Dashboard} />
        <Route path="/add" component={AddExpense} />
        {/* Adding :id allows us to make the route dynamic (note: ID also used in component) */}
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        {/* Switch allows us to add Not Found Page if URL doesn't match a specified path */}
        <Route component={NotFound} />
     </Switch>
    </>
  )
}
