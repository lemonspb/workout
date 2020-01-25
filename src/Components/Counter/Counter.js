import React,{useRef,useEffect} from 'react';
import './Counter.css'

function Counter(props) {
const countRef = useRef(null)

useEffect(()=>{
if(countRef.current.innerHTML.length >= 3){
  countRef.current.style.fontSize = 18 + 'px'
}
},[])

  return (
    <div className={`counter ${props.className}`} ref={countRef}>
        {props.number}
    </div>
  );
}





export default Counter
