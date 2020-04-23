import React from 'react';
import { v1 as uuid } from 'uuid';
import { createStore, combineReducers } from 'redux';

export default function ReduxExpensify() {
    // ADD EXPENSE ACTION GENERATOR
    const addExpense = (
        { 
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    });

    // REMOVE EXPENSE ACTION GENERATOR
    const removeExpense = ({ id } = {}) => ({
        type: 'REMOVE_EXPENSE',
        id
    })

    // Expenses reducer
    const expensesReducerDefaultState = [];
    const expensesReducer = (state = expensesReducerDefaultState, action) => {
        switch (action.type) {
            case 'ADD_EXPENSE':
                // Don't want to manipulate array, make new one with newest expense
                // return state.concat(action.expense)
                return [
                    ...state,
                    action.expense
                ]
            case 'REMOVE_EXPENSE':
                // Filter doesn't change array, returns fresh one with specified filtering (id not matching the action's id)
                return state.filter(({ id }) => id !== action.id);
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

    store.subscribe(() => {
        console.log(store.getState());
    })

    const expenseOne = store.dispatch(addExpense({ description: 'Coffee', amount: 2 }));
    const expenseTwo = store.dispatch(addExpense({ description: 'DC Universe', amount: 7 }));

    store.dispatch(removeExpense({ id: expenseOne.expense.id }))

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

    return (
        <div>Nothing to see here</div>
    )
}

// Add expense

// Remove expense
// Edit expense
// Set text filter
// Sort by date
// Sort by amount
// Set start date
// Set end date
// ^ too many actions for one reducer, splitting it up