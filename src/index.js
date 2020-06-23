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
import { expensesReducer } from './reducers/expenses';
import { filtersReducer } from './reducers/filters';

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
    })
);

store.dispatch(addExpense({ description: 'Coffee', amount: 3, createdAt: 1 }));
store.dispatch(addExpense({ description: 'Tacos', amount: 5, createdAt: 10 }));
store.dispatch(addExpense({ description: 'Gum', amount: 1, createdAt: 100 }));
// store.dispatch(setTextFilter('cof'));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    // Root of document goes outside router!
    document.getElementById('root') 
);
