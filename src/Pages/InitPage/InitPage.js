import React from 'react';
import './InitPage.css';
import PullUp from '../../Gifs/pull_ups.gif.mp4';
import PushUp from '../../Gifs/pushup.gif.mp4';
function InitPage() {
  return (
    <div className="init">
<video autoPlay="autoplay" loop="loop" className='init__gif'>
 <source src={PullUp} type="video/mp4" />
</video>
<video autoPlay="autoplay" loop="loop"  className='init__gif'>
 <source src={PushUp} type="video/mp4" />
</video>
    </div>
  );
}

export default  InitPage;