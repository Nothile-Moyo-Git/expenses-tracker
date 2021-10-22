import react, {useState, useEffect} from "react";
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) =>{
    // Takes a filtered list of expenses and maps through each month and collect expenses
    const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value );
    // Calculate the total maximum amount of expenses to compare the other bars to
    const totalMaximum = Math.max(...dataPointValues);

    // Render the bar chart
    return(
        <div className="chart">
            { props.dataPoints.map( dataPoint => 
                <ChartBar
                    key={dataPoint.label} 
                    value={dataPoint.value} 
                    maxValue={totalMaximum}
                    label={dataPoint.label}>
                </ChartBar> ) 
            } 
        </div>
    )

}

export default Chart