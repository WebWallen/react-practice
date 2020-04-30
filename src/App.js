import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import Help from './components/Help';
import NotFound from './components/NotFound';
import ReduxPractice from './practice/redux-101';
import ReduxExpensify from './practice/redux-expensify';
// Begin React/Redux Expensify Imports
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';
import { expensesReducer } from './reducers/expenses';
import { filtersReducer } from './reducers/filters';

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
)

store.dispatch(addExpense({ description: 'Coffee' }));
store.dispatch(addExpense({ description: 'Tacos' }));
store.dispatch(setTextFilter('cof'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

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
        {/* Switch allows us to add Not Found Page if URL doesn't match a specified path */}
        <Route component={NotFound} />
     </Switch>
     
    </>
  )
}
