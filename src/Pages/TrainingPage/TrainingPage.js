import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { SumCountMinus } from '../../Actions';
import Counter from '../../Components/Counter/Counter';
import './TrainingPage.css';
import {WatchBase64} from '../../Images/base64'
import { Redirect, Link } from 'react-router-dom';
function TrainingPage(props) {

  const [count, setCount] = useState(1);
  const [isRelaxTime, setRelaxTime] = useState(false)
  const intervalId = useRef();
  const numbers = new Array(props.totalExercise).fill(0).map((v, i) => i + 1)

  const convertTime = (totalSeconds) => {
    let minutes = Math.floor(totalSeconds / 60);
    let conditionForMinutes = minutes === 0 ? '' : `${minutes}m`
    let seconds = totalSeconds % 60;
    return `${conditionForMinutes}${seconds}s`
  }

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

  if (props.typeTrainingGif === '') {
    return <Redirect to='/' />
  }

  return (
    <div className="trainig">
      <div className='training-container'>
        <div className='trainig__top'>
          {props.listComplitedTraining.length !== 0 
          ? props.listComplitedTraining.map((el) => {
            return (
              <div className='training__result'>
                <img src={el.typeTrainingImage} alt='' className='type-trainig' />
                <Counter number={el.doneAtOneTime} className='counter--dark' />
                <div>{convertTime(el.timeTraining)}</div>
              </div>
            )
          }) 
          : <img src={props.typeTrainingImage} alt='' className='type-trainig' />}
        </div>

        <div className='trainig__list'>

          {numbers.map((v, i) => {
            return (
              <div onClick={() => { props.SumCountMinus(v, count,props.typeTrainingImage); setCount(props.timeTraining); setRelaxTime(true) }} key={i}>
                <Counter number={v} />
              </div>
            )
          })}

        </div>
      </div>
      <div className='traing__bottom-block'>

        {numbers.length === 0
          ? <div className='trainig__final'>
            <h2 className='title-text'>Congratulations you did it!</h2>
            <video muted autoPlay loop playsInline className='init__gif init__gif--mini-size' >
              <source src={props.typeTrainingGif} type="video/mp4" />
            </video>
            <h2 className='title-text'>Total</h2>
            <Counter number={props.initialAmount} className='counter--dark' />
            <div className='training__timer'>{convertTime(props.totalTime)}</div>
            <Link to='/'>
              <button className='btn'>New workout</button>
            </Link>
          </div>
          : !isRelaxTime &&
          <>
            <h2 className='title-text'>Training time</h2>
            <div className='training__timer'>{convertTime(count)}</div>
          </>
        }

      </div>
      {(isRelaxTime && numbers.length !== 0) &&
        <div className='overlay-training'>
          <h2 className='overlay-training__title'>Relax time</h2>
          <img src={WatchBase64()} alt='' className='overlay-training__watch'
          onClick={() => { props.SumCountMinus(0, count, WatchBase64()); setCount(props.timeTraining); setRelaxTime(false) }} />
          <div className='overlay-training__counter'>{convertTime(count)}</div>
        </div>
      }

    </div>
  );
}


const mapStateToProps = ({ totalExercise, listComplitedTraining, timeTraining, typeTrainingImage, totalTime, initialAmount, typeTrainingGif }) => {
  return { totalExercise, listComplitedTraining, timeTraining, typeTrainingImage, totalTime, initialAmount, typeTrainingGif };
};

const mapDispatchToProps = {
  SumCountMinus
};
export default
  connect(mapStateToProps, mapDispatchToProps)
    (TrainingPage);

