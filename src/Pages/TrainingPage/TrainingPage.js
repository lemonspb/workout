import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { SumCountMinus } from '../../Actions';
import Counter from '../../Components/Counter/Counter';
import PullUp from '../../Gifs/pull_ups.gif.mp4';
import PushUp from '../../Gifs/pushup.gif.mp4';
import './TrainingPage.css';
import Watch from '../../Images/Watch.png'
function TrainingPage(props) {
  const numbers = new Array(props.totalExercise).fill(0).map((v, i) => i + 1)

  const convertTime = (totalSeconds) => {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    return `${minutes ? minutes : ''} ${seconds}s`
  }
  const [count, setCount] = useState(1);
  const [isRelaxTime, setRelaxTime] = useState(false)
  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId.current);
  }, []);

  useEffect(() => {
    if (numbers.length === 0) {
      clearInterval(intervalId.current)
    }
  }, [numbers])

  return (

    <div className="trainig">
      <div className='training-container'>
        <div className='trainig__top'>
          {props.listComplitedTraining.length !== 0 ? props.listComplitedTraining.map((el) => {
            return (
              <div className='training__result'>
                <img src={el.typeTrainingImage} alt='' className='type-trainig' />
                <Counter number={el.doneAtOneTime} className='counter--dark' />
                <div>{convertTime(el.timeTraining)}</div>
              </div>
            )
          }) : <img src={props.typeTrainingImage} alt='' className='type-trainig' />}
        </div>

        <div className='trainig__list'>

          {numbers.map((v, i) => {
            return (
              <div onClick={() => { props.SumCountMinus(v, count); setCount(props.timeTraining); setRelaxTime(true) }}>
                <Counter number={v} />
              </div>
            )

          })}

        </div>
      </div>
      <div className='traing__bottom-block'>
    
        {numbers.length === 0 ? <div className='trainig__final'><video muted autoPlay loop playsInline className='init__gif init__gif--mini-size' >
          <source src={PullUp} type="video/mp4" /></video>         
        <Counter number={props.initialAmount} className='counter--dark' />
        <div className='training__timer'>{convertTime(props.totalTime)}</div></div>:!isRelaxTime && <div className='training__timer'>{convertTime(count)}</div>}

      </div>
      {(isRelaxTime && numbers.length !== 0) &&
        <div className='overlay-training'><img src={Watch} alt='' className='overlay-training__watch' onClick={() => { props.SumCountMinus(0, count); setCount(props.timeTraining); setRelaxTime(false) }} />
        <div className='overlay-training__counter'>{convertTime(count)}</div>
        </div>
       }  

    </div>
  );
}


const mapStateToProps = ({ totalExercise, listComplitedTraining, timeTraining, typeTrainingImage, totalTime,initialAmount }) => {
  return { totalExercise, listComplitedTraining, timeTraining, typeTrainingImage, totalTime,initialAmount };
};

const mapDispatchToProps = {
  SumCountMinus
};
export default
  connect(mapStateToProps, mapDispatchToProps)
    (TrainingPage);

