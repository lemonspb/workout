import React from 'react';
import { connect } from 'react-redux';
import { SumCountMinus } from '../../Actions';
import Counter from '../../Components/Counter/Counter'
import './TrainingPage.css'
function TrainingPage(props) {
    const numbers = new Array(props.sumCount).fill(0).map((v, i) => i+1)

  return (
    <div className="trainig">
        <div className='trainig__top'></div>
        <div className='trainig__list'>
        {numbers.map((v,i)=>{
        return(
            <div onClick={()=>{props.SumCountMinus(v)}}> 
                 <Counter  number={v}  />
                 </div>
        )
        
    })}
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
(TrainingPage);

