import React from 'react';
import { connect } from 'react-redux';

// Goal is to craft a super simple presentational component that scales easily

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {/* This will turn into a map function, just wanted to make sure it's rendering for now */}
        {props.expenses.length}
        {props.filters.text}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
}

// Connect is how we sync global state with local props inside connected components
export default connect(mapStateToProps)(ExpenseList);