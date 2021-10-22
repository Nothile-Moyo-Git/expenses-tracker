import React, {useState, useEffect} from "react";
import './ChartBar.css';

const ChartBar = (props) => {
    
    
    let barFillHeight = '0%';

    // Gets the % fill by getting the expenses amount and comparing it to the maximum expense amount
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    // Return the bar
    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
                <div className="chart-bar__label">{props.label}</div>
        </div>
    )

}

export default ChartBar; 