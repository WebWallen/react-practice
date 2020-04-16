import React from 'react';
import { createStore } from 'redux';
// Called once to create store, which tracks changing data over time in a global container

export default function ReduxPractice() {
    // Set up state with default value
    const store = createStore((state = { count : 0 }, action) => {
        switch (action.type) {
            case 'INCREMENT':
                // If a number is attached, add by that; if not, increment by 1
                const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
                return {
                    count: state.count + incrementBy
                } 
            case 'DECREMENT':
                const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
                return {
                    count: state.count - decrementBy
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
    store.dispatch({
        // Convention = caps and underscores separating words
        type: 'INCREMENT',
        // Can now pass in dynamic values with this variable
        incrementBy: 5
    });

    // unsubscribe()

    store.dispatch({
        type: 'RESET'
    })

    store.dispatch({
        // Convention = caps and underscores separating words
        type: 'DECREMENT',
        decrementBy: 5
    });

    store.dispatch({
        type: 'SET',
        count: 101
    })

    return (
        <div>Nothing to see here.</div>
    )

}