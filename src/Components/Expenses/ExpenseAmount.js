import './ExpenseItem.css';

function ExpenseAmount(props){

    // Output the amount
    return(
        <div className="expense-item__price">£{props.amount}</div>
    );
}

export default ExpenseAmount;