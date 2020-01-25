import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import Counter from '../../Components/Counter/Counter'
import './ChoiceCountPage.css'

import {Link} from 'react-router-dom'
import { choiceSumCount,loadMore } from '../../Actions';
function ChoiceCountPage(props) {
    const numbers = new Array(props.sumCount).fill(0).map((v, i) => i+1)
  console.log(props.typeTrainingImage.then((val)=>val))  
// useEffect(()=>{
//   console.log(window.pageYOffset)
//   window.scrollTo({
//     top: window.pageYOffset+10000,
//     behavior: "smooth"
// });
// },[props.sumCount])

  return (
    <div className='training-container'> 
<div className="choice-count">
      <div className="choice-count__top">
    </div>  

      <div className="choice-count__list">
    {numbers.map((v,i)=>{
        return(
            <div key={i}>
                      <Link to='/start-training/' className='choice-count__link' onClick={()=>{props.choiceSumCount(v)}}>
                 <Counter  number={v}   />
                 </Link>

            </div> 
             
        )
        
    })}
    
    </div>
    </div>
    <button onClick={()=>props.loadMore()}>more</button>
    </div>
  );
}

const mapStateToProps = ({ sumCount,typeTrainingImage}) => {
  return { sumCount,typeTrainingImage };
};
const mapDispatchToProps = {
  choiceSumCount,
  loadMore
};


export default 
  connect(mapStateToProps,mapDispatchToProps)
(ChoiceCountPage);

