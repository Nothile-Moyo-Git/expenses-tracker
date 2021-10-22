import react, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    // This is a test of conditional code
    const [isEditing, setIsEditing] = useState(false);

    // Retrieve our expense data from the expense form. We're placing this into props and then passing it back up. 
    const saveDataExpenseHandler = (enteredExpenseData) => {

        // Create a new expense and give it an ID between 0 and 100
        const expenseData = {
            id: 'e' + (Math.floor(Math.random() * 100)).toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);
        // Reload Add New Expense button
        setIsEditing(false);
    }

    // Event handlers
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    // Render our Add New Expense button or render our expense fomr
    return(
        <div className="new-expense">
            { !isEditing && <button onClick={startEditingHandler} type="button">Add New Expense</button> }
            { isEditing &&<ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveDataExpenseHandler} ></ExpenseForm> }
        </div>
    );
}

export default NewExpense;