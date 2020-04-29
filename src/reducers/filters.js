// Filters reducer 
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount', // or date
    startDate: undefined,
    endDate: undefined
};

export default function filtersReducer (state = filtersReducerDefaultState, action) {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
            return {
                // Pass in current state, then change text property to action's text value
                ...state,
                text: action.text
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        default: 
            return state;
    }
};