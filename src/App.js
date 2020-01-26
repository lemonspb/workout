import React from 'react';
import InitPage from './Pages/InitPage/InitPage';
import ChoiceCountPage from './Pages/ChoiceCountPage/ChoiceCountPage'
import StartTrainingPage from './Pages/StartTrainigPage/StartTrainingPage'
import TrainingPage from './Pages/TrainingPage/TrainingPage'
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Route path='/' exact render={() => <InitPage />} />
      <Route path='/choice-count/' exact render={() => <ChoiceCountPage />} />
      <Route path='/start-training/' exact render={() => <StartTrainingPage />} />
      <Route path='/training/' exact render={() => <TrainingPage />} />


    </div>
  );
}

export default App;
