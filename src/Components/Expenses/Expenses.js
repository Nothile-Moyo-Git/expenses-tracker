import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'
import Card from "../UI/Card";
import react, {useState, useEffect} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses( props ){

    // This is the year we're setting for the filter to decipher our entries, we're setting a state to begin with
    const [filteredYear, setFilteredYear] = useState('2021');
    
    // We're passing this through to the child component so we can set a new year to filter entries by. We're using two way binding for this
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear( selectedYear );
    }

    // Set a state variable based on prop items
    const [expenses, setCurrentExpenses] = useState(props.items);

    // Update the list whenever we get a new change
    useEffect( () => {
        setCurrentExpenses(props.items);
    });


    // Then we need an empty array in order to avoid errors
    let expensesList = [];
    
    // Here, we're creating the dynamic array that is based on the expenses array passed through via props
    expenses.forEach((expenses) => {
        // Add it to the array  
        expensesList.push( <ExpenseItem title={expenses.title} amount={expenses.amount} date={expenses.date}></ExpenseItem> );
    }) 

    const expensesWarning = <p>No expenses found!</p>;

    // Create a dynamic array which takes the expenses State and filteres it based on the current year
    const filteredList = expenses.filter( expense => {return (expense.date.getFullYear().toString()) === filteredYear} );

    // Render our expenses parent component cost
    return(
        <div>            
            <Card className="expenses"> 
                <ExpensesFilter selected={ filteredYear } setfilteredYear={filterChangeHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredList}></ExpensesChart>
                <ExpensesList items={filteredList}></ExpensesList>

            </Card>
        </div>
    );

}

export default Expenses;