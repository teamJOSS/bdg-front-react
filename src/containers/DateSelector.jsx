import React from 'react';
import { DatePicker } from 'antd';
import './DataSelector.css';


function DateSelector() {
  return (
    <>
      <DatePicker open={true} size="middle"/>
    </>
  )
}

export default DateSelector;