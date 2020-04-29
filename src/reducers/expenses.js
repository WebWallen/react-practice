// Expenses reducer
const expensesReducerDefaultState = [];

export default function expensesReducer (state = expensesReducerDefaultState, action) {
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