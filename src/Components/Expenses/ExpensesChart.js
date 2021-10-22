import react from "react";
import Chart from "../Chart/Chart";


const ExpensesChart = (props) => {

    // This component and its children are an exercise in dynamic styling 
    
    // Create an array of every month of the year for our chart
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    // Adding the expense amount to the datapoint for each expense
    for( const expense of props.expenses ){
        const expenseMonth = expense.date.getMonth(); // Starting at 0
        chartDataPoints[expenseMonth].value += expense.amount;

    }

    // Render our chart
    return(
        <Chart dataPoints={chartDataPoints}>

        </Chart>
    );
}

export default ExpensesChart;