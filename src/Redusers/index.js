const initialState = {
    pushUp: false,
    pullUp: false,
    sumCount: 0
  };
  
  const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'WORK_CHOICE_PUSHUP':
        return {
            ...state,
            pushUp: action.payload
        };
        case 'WORK_CHOICE_PULLUP':
            return {
                ...state,
                pullUp: action.payload
            };
            case 'CHOICE_SUM_COUNT':
            return {
                ...state,
                sumCount: action.payload
            };
      default:
        return state;
    }
  };
  
  export default reducer;