import React from 'react';
import { connect } from 'react-redux';
import { SumCountMinus } from '../../Actions';
import Counter from '../../Components/Counter/Counter'
import './TrainingPage.css'

function TrainingPage(props) {
    const numbers = new Array(props.sumCount).fill(0).map((v, i) => i+1)




  return (

    <div className="trainig">
        <div className='training-container'> 
        <div className='trainig__top'>
{props.minusSum.map((el)=>{
    return(
        <div className='trainig__result'>
       <img  src={el.typeTrainingImage} alt='' className='type-trainig' />
            <div>{el.sumCount}</div>
            <div>{el.timeTraining}</div>
        </div> 
    )
})}
        </div>
        <div className='trainig__list'>
        {numbers.map((v,i)=>{
        return(
            <div onClick={()=>{props.SumCountMinus(v,10)}}> 
                 <Counter  number={v}  />
                 </div>
        )
        
    })}
        </div>
    </div>
    </div>
  );
}


const mapStateToProps = ({ sumCount,minusSum }) => {
  return { sumCount,minusSum };
};

const mapDispatchToProps = {
    SumCountMinus
};
export default 
  connect(mapStateToProps,mapDispatchToProps)
(TrainingPage);

