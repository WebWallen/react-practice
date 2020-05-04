import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// Begin Redux imports
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
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
);

store.dispatch(addExpense({ description: 'Coffee' }));
store.dispatch(addExpense({ description: 'Tacos' }));
store.dispatch(setTextFilter('cof'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    // Root of document goes outside router!
    document.getElementById('root') 
);
