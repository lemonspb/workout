


const initialState = {
    typeTrainingImage: '',
    sumCount: 90,
    minusSum: [],
    timeTraining: 0,
    trainingElement:{
     sumCount: '',
     typeTrainingImage: '',
     timeTraining: 0,
    }
  };
  
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'CHOICE_TRAINING_TYPE':
        return {
            ...state,
            typeTrainingImage: action.payload
            
            };
            case 'CHOICE_SUM_COUNT':
            return {
                ...state,
                sumCount: action.payload

            };
            case 'LOAD_MORE':
                return {
                    ...state,
                    sumCount: state.sumCount*2    
                };
            case 'AMOUNT_COMPLETED':
                return {
              
                    ...state,
                    sumCount:  state.sumCount-action.payload.number,
                    trainingElement:{
                    typeTrainingImage: state.typeTrainingImage,
                     sumCount: action.payload.number,
                     timeTraining: 0,
                    },
                      
                    minusSum:[...state.minusSum,state.trainingElement],
                };
      default:
        return state;
    }
  };
  
  export default reducer;