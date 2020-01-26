

const transferEllipsis = (number) =>{
  if(number === 0){
    return '...'
  }
  else return number
}


const initialState = {
    typeTrainingImage: '',
    totalExercise: 90,
    listComplitedTraining: [],
    timeTraining: 1,
    trainingElement: {
      typeTrainingImage:''
      
    }
  };
  
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'CHOICE_TRAINING_TYPE':
        return {
            ...state,
            typeTrainingImage: action.payload,
            totalExercise: 90,
            trainingElement:{
              typeTrainingImage:action.payload
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
                    totalExercise: state.totalExercise*2    
                };
            case 'AMOUNT_COMPLETED':
                return {
              
                    ...state,
                    totalExercise:  state.totalExercise-action.payload.number,
                    timeTraining:0,
                    trainingElement:{
                    typeTrainingImage: state.typeTrainingImage,
                    doneAtOneTime: transferEllipsis(action.payload.number),
                     timeTraining: action.payload.time,
                    },
                      
                    listComplitedTraining:[...state.listComplitedTraining,state.trainingElement],
                };
      default:
        return state;
    }
  };
  
  export default reducer;