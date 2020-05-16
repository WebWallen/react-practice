import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpense = (props) => (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm 
      // Wire button up by dispatching the right action with user data and redirecting to dashboard
        onSubmit={(expense) => {
          console.log(expense);
          props.dispatch(addExpense(expense));
          props.history.push('/dashboard');
        }}  
      />
    </div>
);

export default connect()(AddExpense);