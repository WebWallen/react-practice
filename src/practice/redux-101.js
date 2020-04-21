import React from 'react';
import { createStore } from 'redux';
// Called once to create store, which tracks changing data over time in a global container

// Action Generators used to handle all action types
// Also makes for easier debugging due to specific errors
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    // Passing in default to prevent incorrect data type
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
    type: 'SET',
    count
});

// Doesn't need instructions, parameters, or default value since it always resets to 0 as already described in store
const resetCount = () => ({ 
    type: 'RESET'
})

export default function ReduxPractice() {
    // Set up state with default value
    const store = createStore((state = { count : 0 }, action) => {
        switch (action.type) {
            case 'INCREMENT':
                // If a number is attached, add by that; if not, increment by 1
                return {
                    // Must add "action." due to refactoring with action creators (also allowed us to remove consts with functional logic)
                    count: state.count + action.incrementBy
                } 
            case 'DECREMENT':
                return {
                    count: state.count - action.decrementBy
                }
            case 'SET': 
            // Dynamically set a new count
                return {
                    count: action.count
                }
            case 'RESET': 
                return {
                    count: 0
                }
            default: 
                return state;
        }     
    });

    // Watch changes to the store's state
    const unsubscribe = store.subscribe(() => {
        console.log(store.getState());
    })
    // To unsubscribe, assign to variable and call again

    // Actions - object that gets sent to store describing its type
    store.dispatch(incrementCount({ incrementBy: 5 }));
    store.dispatch(incrementCount());
    store.dispatch(decrementCount());
    store.dispatch(decrementCount({ decrementBy: 5}));
    store.dispatch(setCount({ count: 10}));
    store.dispatch(resetCount());
    
    // store.dispatch({
    //     // Convention = caps and underscores separating words
    //     type: 'INCREMENT',
    //     // Can now pass in dynamic values with this variable
    //     incrementBy: 5
    // });

    return (
        <div>Nothing to see here.</div>
    )

}