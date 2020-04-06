import React from 'react';
import { Route } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from my edit expense component 
  </div>
);

const HelpPage = () => (
  <div>
    This is from the help page
  </div>
)

// Blank slate as we are moving on to a different project (preserved previous one inside the practice folder)

export default function App() {
  return (
    <>
     Expensify Boilerplate

     {/* Exact avoids accidental loading of one app on top of another */}
     <Route exact path="/" component={ExpenseDashboardPage} />
     <Route path="/add" component={AddExpensePage} />
     <Route path="/edit" component={EditExpensePage} />
     <Route path="/help" component={HelpPage} />
    </>

  )

}
