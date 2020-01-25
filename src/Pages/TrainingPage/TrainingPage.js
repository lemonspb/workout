import React,{useEffect,useState,useRef}from 'react';
import { connect } from 'react-redux';
import { SumCountMinus } from '../../Actions';
import Counter from '../../Components/Counter/Counter';
import { Scrollbars } from 'react-custom-scrollbars';
import './TrainingPage.css'

function TrainingPage(props) {
    const numbers = new Array(props.sumCount).fill(0).map((v, i) => i+1)
    const [count, setCount] = useState(1);

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId.current);
  }, []);


  return (

    <div className="trainig">
        <div className='training-container'> 
        <div className='trainig__top'>
{props.minusSum.map((el)=>{
    return(
        <div className='trainig__result'>
       <img  src={el.typeTrainingImage} alt='' className='type-trainig' />
       <Counter  number={el.sumCount} className='counter--dark'/>
            <div>{el.timeTraining}sec</div>
        </div> 
    )
})}
        </div>
   
        <div className='trainig__list'>
      
        {numbers.map((v,i)=>{
        return(
            <div onClick={()=>{props.SumCountMinus(v,count);setCount(props.timeTraining)}}> 
                 <Counter  number={v}  />
                 </div>
        )
        
    })} 
 
        </div>
    </div>
    <div className='training__timer'>{count}sec</div>
    
  
    </div>
  );
}


const mapStateToProps = ({ sumCount,minusSum,timeTraining }) => {
  return { sumCount,minusSum,timeTraining };
};

const mapDispatchToProps = {
    SumCountMinus
};
export default 
  connect(mapStateToProps,mapDispatchToProps)
(TrainingPage);

