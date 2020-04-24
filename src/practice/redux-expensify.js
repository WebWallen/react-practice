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
    });

    const editExpense = (id, updates) => ({
        type: 'EDIT_EXPENSE',
        id,
        updates
    });

    // Expenses reducer
    const expensesReducerDefaultState = [];
    const expensesReducer = (state = expensesReducerDefaultState, action) => {
        switch (action.type) {
            case 'ADD_EXPENSE':
                // Don't want to manipulate array, make new one with newest expense
                return [
                    ...state,
                    action.expense
                ]

            case 'REMOVE_EXPENSE':
                // Filter doesn't change array, returns fresh one with specified filtering (id's not matching the removed action's id)
                return state.filter(({ id }) => id !== action.id);

            case 'EDIT_EXPENSE':
                // Map is a good choice because it allows us to modify an array (container for expenses) and return without manipulating original
                return state.map((expense) => {
                    if (expense.id === action.id) {
                        return {
                            ...expense,
                            ...action.updates
                        }
                    } else return expense; 
                })

            default: 
                return state;
        }
    };

    // Set Filter Action Generator
    const setTextFilter = (text = '') => ({
        type: 'SET_TEXT_FILTER',
        text
    })

    // Filters reducer 
    const filtersReducerDefaultState = {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    };

    const filtersReducer = (state = filtersReducerDefaultState, action) => {
        switch (action.type) {
            case 'SET_TEXT_FILTER': 
                return {
                    // Pass in current state, then change text property to action's text value
                    // Note: can't use filter because we are returning an object vs an array here
                    ...state,
                    text: action.text
                }

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

    store.dispatch(removeExpense({ id: expenseOne.expense.id }));
    store.dispatch(editExpense(expenseTwo.expense.id, { amount: 10 } ));

    store.dispatch(setTextFilter('rent'));
    store.dispatch(setTextFilter());

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

// Object spread practice
const user = {
    name: 'Jen',
    age: 24
};

console.log({
    ...user,
    location: 'Philadelphia',
    age: 27
})