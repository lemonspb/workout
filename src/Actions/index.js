const choiceTypeTraining = (file) => {
    return {
      type: 'CHOICE_TRAINING_TYPE',
      payload: file
    };
  };
 
  const choiceSumCount = (number) => {
    return {
      type: 'CHOICE_SUM_COUNT',
      payload: number
    };
  };
  const loadMore = () => {
    return {
      type: 'LOAD_MORE',
      
    };
  };
  const SumCountMinus = (number,time) => {
    return {
      type: 'SUM_MINUS',
      payload: {
          number:number,
          time: time
      }
    };
  };

  export {
    choiceTypeTraining,
    choiceSumCount,
    SumCountMinus,
    loadMore
  };