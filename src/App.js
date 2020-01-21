import React from 'react';
import './App.css';
import InitPage from './Pages/InitPage/InitPage';
import ChoiceCountPage from './Pages/ChoiceCountPage/ChoiceCountPage'
import TrainingPage from './Pages/TrainingPage/TrainingPage'
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Route  path='/'  exact render={()=> <InitPage /> }/>
    <Route  path='/choice-count/'  exact render={ ()=> <ChoiceCountPage />}/>
    <Route  path='/training/'  exact render={ ()=> <TrainingPage />}/>

   
    </div>
  );
}

export default App;
