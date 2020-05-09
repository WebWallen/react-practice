import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

// POTENTIAL INTERVIEW QUESTION TOPIC: Dynamically changing form values with Javascript is called "controlled inputs"

const ExpenseListFilters = (props) => (
    <div>
        {/* Pass in props, use them to call dispatch, specify the action that sets text filter, pass in user (target/event) value */}
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value)) }}
        />
        <select 
            // Note: "sortBy" is attached to both action's returns
            value={props.filters.sortBy} 
            onChange={(e) => {
                e.target.value === "date" ? props.dispatch(sortByDate()) 
                : props.dispatch(sortByAmount())
            }}
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);