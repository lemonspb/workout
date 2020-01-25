
const toDataURL = url => fetch(url)
.then(response => response.blob())
.then(blob => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onloadend = () => resolve(reader.result)
  reader.onerror = reject
  reader.readAsDataURL(blob)
}))

const initialState = {
    typeTrainingImage: '',
    sumCount: 90,
    minusSum: [],
    timeTraining: 0
  };
  
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'CHOICE_TRAINING_TYPE':
        return {
            ...state,
            typeTrainingImage: toDataURL(action.payload)
            .then(dataUrl =>dataUrl)
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
            case 'SUM_MINUS':
                return {
                    ...state,
                    minusSum:[...state.minusSum,action.payload],
                    sumCount: state.sumCount-action.payload.number,  
                    timeTraining: action.payload.time
                };
      default:
        return state;
    }
  };
  
  export default reducer;