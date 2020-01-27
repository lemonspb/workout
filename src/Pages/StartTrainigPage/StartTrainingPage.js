import React from 'react';
import { connect } from 'react-redux';
import { SumCountMinus } from '../../Actions';
import Watch from '../../Images/Watch.png'
import Counter from '../../Components/Counter/Counter'
import { Link } from 'react-router-dom'
import './StartTrainigPage.css'
function StartTrainingPage(props) {



  return (
    <div className='training-container'>
      <div className="start-trainig">
        <div className='start-trainig__top'>
        <h2 className='title-text'>Start training</h2>

          <img src={props.typeTrainingImage} alt='' className='type-trainig' />

          <Counter number={props.totalExercise} className='counter--dark' />
        </div>
        <div className='start-trainig__list'>
          <Link to='/training/'>
            <img src={Watch} alt='' className='training-watch' />

          </Link>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = ({ totalExercise, typeTrainingImage }) => {
  return { totalExercise, typeTrainingImage };
};

const mapDispatchToProps = {
  SumCountMinus
};
export default
  connect(mapStateToProps, mapDispatchToProps)
    (StartTrainingPage);
