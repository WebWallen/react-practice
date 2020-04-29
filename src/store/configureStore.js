import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/expenses';

export default function configureStore () {
    // Store creation with combined reducers
    let store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    ); 
}