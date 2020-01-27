

const transferEllipsis = (number) => {
  if (number === 0) {
    return '...'
  }
  return number
}


const initialState = {
  totalTime: 0,
  typeTrainingImage: '',
  totalExercise: 90,
  listComplitedTraining: [],
  timeTraining: 1,
  initialAmount: 0,

};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHOICE_TRAINING_TYPE':
      return {
        ...state,
        typeTrainingImage: action.payload.image,
        typeTrainingGif:  action.payload.gif,
        totalExercise: 90,
        listComplitedTraining: [],
        trainingElement: {
          typeTrainingImage: action.payload.image
        }
      };
    case 'CHOICE_SUM_COUNT':
      return {
        ...state,
        totalExercise: action.payload

      };
    case 'LOAD_MORE':
      return {
        ...state,
        totalExercise: state.totalExercise * 2
      };
    case 'AMOUNT_COMPLETED':
      const trainingElement = {
        typeTrainingImage: state.typeTrainingImage,
        doneAtOneTime: transferEllipsis(action.payload.number),
        timeTraining: action.payload.time,
      };
      return {
        ...state,
        totalExercise: state.totalExercise - action.payload.number,
        timeTraining: 0,
        totalTime: state.totalTime + action.payload.time,
        initialAmount: state.initialAmount + action.payload.number,
        listComplitedTraining: [...state.listComplitedTraining, trainingElement],
      };
    default:
      return state;
  }
};

export default reducer;