import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

// Destructure the desired props for easy access (spread into EL)
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({ id })) // Id is contained in an object, thus curlys
            }}>Remove
        </button>
    </div>
);

export default connect()(ExpenseListItem);

// No need to connect anything here, it's already done in ExList