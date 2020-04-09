import { createStore } from 'redux';
// Called once to create store, which tracks changing data over time

// Set up state with default value
const store = createStore((state = { count : 0 }) => {
    return state;
});

// Returns current state object
console.log(store.getState());