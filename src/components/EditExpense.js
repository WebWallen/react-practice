import React from 'react';

const EditExpense = (props) => (
    <div>
      Editing the expense with id of {props.match.params.id}
    </div>
);

export default EditExpense;