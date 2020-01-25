import React from 'react';
import { connect } from 'react-redux';
import { SumCountMinus } from '../../Actions';
import Watch from '../../Images/Watch.png'
import Counter from '../../Components/Counter/Counter'
import {Link} from 'react-router-dom'
function StartTrainingPage(props) {
    

  return (
    <div className='training-container'> 
    <div className="start-trainig">
        <div className='start-trainig__top'>
            <Counter  number={props.sumCount} className='counter--dark'/>
        </div>
        <div className='start-trainig__list'>
        <Link to='/training/'>
        <img src={Watch}  alt=''  className='training-watch'/>

                 </Link>
        </div>
    </div>
    </div>
  );
}


const mapStateToProps = ({ sumCount }) => {
  return { sumCount };
};

const mapDispatchToProps = {
    SumCountMinus
};
export default 
  connect(mapStateToProps,mapDispatchToProps)
(StartTrainingPage);
