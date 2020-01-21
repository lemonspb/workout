import React from 'react';
import './Counter.css'
import { connect } from 'react-redux';
import { choiceSumCount } from '../../Actions';

function Counter(props) {
  return (
    <div className="counter" onClick={()=>props.choiceSumCount(props.number)}>
        {props.number}
    </div>
  );
}


const mapDispatchToProps = {
    choiceSumCount
  };


export default connect(
    null,
    mapDispatchToProps)(Counter);
