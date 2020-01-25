import React from 'react';
import './InitPage.css';
import { connect } from 'react-redux';
import { choiceTypeTraining } from '../../Actions';
import PullUp from '../../Gifs/pull_ups.gif.mp4';
import PushUp from '../../Gifs/pushup.gif.mp4';
import  PullUpImg  from'../../Images/pull_ups 1 (1).png'
import {Link} from 'react-router-dom'
function InitPage(props) {
  



  return (
    <div className="init">
      <img src={PullUpImg} id='pullId' />
      <Link to='/choice-count' onClick={()=>props.choiceTypeTraining(PullUpImg)}>
<video muted autoPlay loop playsInline className='init__gif' >
 <source src={PullUp} type="video/mp4" />
</video>
</Link> 
<Link to='/choice-count' onClick={()=>props.choiceTypeTraining(PushUp)}>
<video muted autoPlay loop playsInline  className='init__gif' >
 <source src={PushUp} type="video/mp4" />
</video>
</Link>
    </div>
  );
}


const mapDispatchToProps = {
  choiceTypeTraining
};
export default 
  connect(null,mapDispatchToProps)
(InitPage);

