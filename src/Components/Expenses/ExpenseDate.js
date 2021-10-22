import './ExpenseItem.css';
import './ExpenseDate.css'
import react from 'react';

function ExpenseDate( props ){

    // We're getting our date from the input field and converting it into usable data here
    const month = props.date.toLocaleString('en-GB', { month: 'long' });
    const day = props.date.toLocaleString( 'en-GB', { day: '2-digit' } );
    const year = props.date.getFullYear();

    /* Trying out React Native, it works a lot like JavaScript with <var>.createElement("div") <var>.className="<className>" etc...
        const expenseDateOutput = 
        react.createElement('div', {className:'expense-date'},
            react.createElement('div' , {className:'expense-date__day'}, day),
            react.createElement('div' , {className:'expense-date__month'}, month),
            react.createElement('div' , {className:'expense-date__year'}, year)
        );

        console.log( expenseDateOutput );
        
        return(
            <div>{expenseDateOutput}</div>
        );
    */

    // Output the date
    return(
        <div className="expense-date">
            <div className="expense-date__day">   {day} </div>
            <div className="expense-date__month"> {month} </div>
            <div className="expense-date__year">  {year} </div>
        </div>
    ); 
}

export default ExpenseDate;