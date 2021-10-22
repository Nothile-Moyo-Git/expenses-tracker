import react from "react";
import './ExpenseForm.css';
import React, { useState, useEffect } from 'react';

const ExpenseForm = (props) => {

    // Exercise in using React States. We're creating them here to capture our input values
    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredAmount, setEnteredAmount] = useState();
    const [enteredDate, setEnteredDate] = useState();

    // Definitions for the state functions
    const titleChangeHandler = (event) => {
        setEnteredTitle( event.target.value );
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount( Number(event.target.value) );
    }

    const dateChangeHandler = (event) => {
        setEnteredDate( event.target.value );
    }

    // We're using this event handler in order to prevent the page from reloading if we save the expense via preventDefault
    // We are subsequently creating a new array using our states, and using two way binding to pass it back up
    const submitFormHandler = (event) => {

        // Ignore the first submission
        event.preventDefault();
 
        // Create new array of expense data
        const expenseData = {
            title:  enteredTitle,
            amount: +enteredAmount,
            date:   new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        // Empty our input fields once we've submitted the form data
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    // Render our new expense form and also exercise using event handlers
    return(
        <div className="new-expense__controls">
            <form onSubmit={submitFormHandler}> 
                <div className="new-expense__control">
                    <label> Title </label>
                    <input type="text" placeholder="Please enter your new title" onChange={titleChangeHandler} value={enteredTitle}></input>
                </div>
                <div className="new-expense__control">
                    <label> Amount </label>
                    <input type="number"  onChange={amountChangeHandler} value={enteredAmount}></input>
                </div>
                <div className="new-expense__control">
                    <label> Date </label>
                    <input type="date" min="2021-09-26" max="2099-12-31" onChange={dateChangeHandler} value={enteredDate}></input>
                </div>  
                <div className="new-expense__control">
                    <button type="button" class="cancel-button" onClick={props.onCancel}> Cancel </button>
                    <button type="submit" class=""> Add Expense </button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;