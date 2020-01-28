import React from 'react';
import { connect } from 'react-redux';
import Counter from '../../Components/Counter/Counter';
import './ChoiceCountPage.css';
import { Link } from 'react-router-dom';
import { choiceSumCount, loadMore } from '../../Actions';
function ChoiceCountPage(props) {

  const numbers = new Array(props.totalExercise).fill(0).map((_, i) => i + 1);

  return (
    <div className='training-container'>
      <div className="choice-count">
        <h2 className='title-text'>Сhoose the amount of exercise</h2>
        <div className="choice-count__top">
          <img src={props.typeTrainingImage} alt='' className='type-trainig' />
        </div>
        <div className="choice-count__list">
          {numbers.map((v, i) => {
            return (
              <div key={i}>
                <Link to='/start-training/' className='choice-count__link' onClick={() => { props.choiceSumCount(v) }}>
                  <Counter number={v} />
                </Link>
              </div>
            )
          })}

        </div>
      </div>
      <button onClick={() => props.loadMore()} className='btn'>Load more</button>
    </div>
  );
}

const mapStateToProps = ({ totalExercise, typeTrainingImage }) => {
  return { totalExercise, typeTrainingImage };
};
const mapDispatchToProps = {
  choiceSumCount,
  loadMore
};


export default
  connect(mapStateToProps, mapDispatchToProps)
    (ChoiceCountPage);

