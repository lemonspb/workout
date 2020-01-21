import React from 'react';
import './InitPage.css';
import PullUp from '../../Gifs/pull_ups.gif.mp4';
import PushUp from '../../Gifs/pushup.gif.mp4';
function InitPage() {
  return (
    <div className="init">
<video autoPlay loop="loop" className='init__gif' onClick=''>
 <source src={PullUp} type="video/mp4" />
</video>
<video autoPlay loop="loop"  className='init__gif' onClick=''>
 <source src={PushUp} type="video/mp4" />
</video>
    </div>
  );
}

export default  InitPage;