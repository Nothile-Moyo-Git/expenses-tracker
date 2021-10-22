import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';
import ExpenseAmount from './ExpenseAmount';
import Fizzbuzz from './Fizzbuzz';
import Card from '../UI/Card';
import React, { useState, useEffect } from 'react';

function ExpenseItem( props ){

    // Generate a Card component here which contains all the expense information from the expenses array we pass through props
    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <ExpenseTitle title={props.title}/>
                    <ExpenseAmount amount={props.amount}/>
                </div>

            </Card>
        </li>
    );
}

export default ExpenseItem;