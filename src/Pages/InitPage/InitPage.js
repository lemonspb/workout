import React from 'react';
import './InitPage.css';
import { connect } from 'react-redux';
import { choicePushUp,choicePullUp } from '../../Actions';
import PullUp from '../../Gifs/pull_ups.gif.mp4';
import PushUp from '../../Gifs/pushup.gif.mp4';
import {Link} from 'react-router-dom'
function InitPage(props) {
  return (
    <div className="init">
      <Link to='/choice-count' onClick={()=>props.choicePullUp(true)}>
<video muted autoPlay loop playsInline className='init__gif' >
 <source src={PullUp} type="video/mp4" />
</video>
</Link> 
<Link to='/choice-count' onClick={()=>props.choicePushUp(true)}>
<video muted autoPlay loop playsInline  className='init__gif' >
 <source src={PushUp} type="video/mp4" />
</video>
</Link>
    </div>
  );
}


const mapDispatchToProps = {
  choicePushUp,
  choicePullUp
};
export default 
  connect(null,mapDispatchToProps)
(InitPage);

