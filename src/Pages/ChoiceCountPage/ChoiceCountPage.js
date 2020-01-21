import React from 'react';
import { connect } from 'react-redux';
import Counter from '../../Components/Counter/Counter'
import './ChoiceCountPage.css'
import PullUp from '../../Images/pull_ups 1 (1).png';
import PushUp from '../../Images/pushup 1 (1).png';
import {Link} from 'react-router-dom'
import { choiceSumCount } from '../../Actions';

function ChoiceCountPage(props) {
    const numbers = new Array(70).fill(0).map((v, i) => i+1)
    
  return (
    <div className="choice-count">
      <div className="choice-count__top">
    <img src={props.pullUp?PullUp:PushUp}  alt=''/>
    </div>  

      <div className="choice-count__list">
    {numbers.map((v,i)=>{
        return(
            <div key={i}>
                      <Link to='/training/' className='choice-count__link' onClick={()=>{props.choiceSumCount(v)}}>

                 <Counter  number={v}   />
                 </Link>

            </div> 
           
        )
        
    })}
    
    </div>
    </div>
  );
}

const mapStateToProps = ({ pullUp, pushUp,sumCount }) => {
  return { pullUp, pushUp,sumCount };
};
const mapDispatchToProps = {
  choiceSumCount
};


export default 
  connect(mapStateToProps,mapDispatchToProps)
(ChoiceCountPage);

