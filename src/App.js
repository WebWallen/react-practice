import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import Help from './components/Help';
import NotFound from './components/NotFound';
// Begin React/Redux Expensify Imports
import { AdminInfo } from './practice/hoc';
import { AuthenticatedInfo } from './practice/hoc';
import ExpenseDashboard from './components/ExpenseDashboard';

export default function App() {
  return (
    <>
     {/* Not in Switch because we want the navigation menu and header to display on all components */}
     <Header />

     {/* Begin routes */}
     <Switch>
        {/* Exact avoids accidental loading of one component on top of another */}
        <Route exact path="/" component={Dashboard} />
        <Route path="/add" component={AddExpense} />
        {/* Adding :id allows us to make the route dynamic (note: ID also used in component) */}
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route path="/redux" component={ReduxPractice} />
        <Route path="/expensify" component={ReduxExpensify} />
        <Route path="/dashboard" component={ExpenseDashboard} />
        <Route 
          exact path="/hoc" 
          // Render is called for when props are being passed to component attached to React Router
          render={(props) => <AdminInfo {...props} info="details" isAdmin={false} />} 
        />
        <Route 
          path="/hoc-2"
          render={(props) => <AuthenticatedInfo {...props} info="details" isAuthenticated={false} />}
        />
        {/* Switch allows us to add Not Found Page if URL doesn't match a specified path */}
        <Route component={NotFound} />
     </Switch>
     
    </>
  )
}
