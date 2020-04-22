import React from 'react';
import { createStore, combineReducers } from 'redux';

// Add expense
// Remove expense
// Edit expense
// Set text filter
// Sort by date
// Sort by amount
// Set start date
// Set end date
// ^ too many actions for one reducer, splitting it up

// Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

// Filters reducer 
const filtersReducerDefaultState = {
    text: 'rent',
    sortBy: 'amount', // or date
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

// Store creation with combined reducers
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'abc',
        description: 'January Rent',
        note: 'Final payment for that address',
        amount: 550,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }
};