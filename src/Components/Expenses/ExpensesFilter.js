import React, { useState, useEffect } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const [chosenYear, setChosenYear] = useState();    
  // We're collecting our filtered through year here and passing it up
  const chosenYearHandler = (event) => {
      setChosenYear( event.target.value );
      // Pass though to parent for two way binding
      props.setfilteredYear( event.target.value );
  }

  // Render out filter drop-down
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={chosenYearHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;