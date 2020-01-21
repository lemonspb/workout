import React from 'react';
import { connect } from 'react-redux';
import { choicePushUp,choicePullUp } from '../../Actions';

function TrainingPage(props) {
  return (
    <div className="init">
     
    </div>
  );
}

const mapStateToProps = ({ choice }) => {
  return { choice };
};

const mapDispatchToProps = {
  choicePushUp,
  choicePullUp
};
export default 
  connect(mapStateToProps,mapDispatchToProps)
(TrainingPage);

