import './ExpensesList.css';
import react, {useState, useEffect} from "react";
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    // Our responsive if there are no expenses available
    let expensesContent = <h2 className="expenses-list__fallback">Found No Expenses</h2>;

    // Exercise in conditional statements using React. Either return the filtered list or display the no expenses text
    if( props.items.length === 0 ){
        return( expensesContent )
    }else{
        return(
            <ul className="expenses-list">
                {
                    props.items.map(
                        expense => (
                                <ExpenseItem 
                
                                //Always set the keys for a React Array in order to avoid the dreaded 'key' error!
                                key={expense.id}
                
                                // The rest of the values come from props.items 
                                title={expense.title} 
                                amount={expense.amount} 
                                date={expense.date}>
                
                            </ExpenseItem>  
                    ))
                }
            </ul>
        )
    }

}

export default ExpensesList;