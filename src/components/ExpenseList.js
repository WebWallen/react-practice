import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expenses';

// Goal is to craft a super simple presentational component that scales easily

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        { props.expenses.map((expense) => {
            // To be compatible with ListItem, spread in the props
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        // Calling selector function renders correct filtered info
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
}

// Connect is how we sync global state with local props inside connected components
export default connect(mapStateToProps)(ExpenseList);