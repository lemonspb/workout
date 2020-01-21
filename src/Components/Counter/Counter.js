import React from 'react';
import './Counter.css'
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div className="counter">
        {props.number}
    </div>
  );
}





export default Counter
