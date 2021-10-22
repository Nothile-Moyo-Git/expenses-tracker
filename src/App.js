import ExpenseItem from "./Components/Expenses/ExpenseItem";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
import React, { useState, useEffect } from 'react';

// We're using dummy expenses here as we plan to integrate live databases at a later stage of learning. Next.js is on the list!
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  // Get the starting state, if it's empty then create an acceptable input
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // This is called in the child component to pass the updated expense back up
  const addExpenseHandler = (expense) => {
    // DUMMY_EXPENSES here is a reference to the current state file which works like a function
    setExpenses((previousState) => {
        return [expense, ...previousState];
      }
    );}

  return (
    <div>

      <h2 className="page-title">
          <span className="welcome-text">
            Welcome, this is my expenses tracker :).
          </span>
      </h2>
      {/* Render our new expense and expenses component we obtain using states from our child components */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}> </Expenses>
    </div>
  );
}

export default App;

