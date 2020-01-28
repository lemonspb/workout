const choiceTypeTraining = (image,gif) => {
    return {
      type: 'CHOICE_TRAINING_TYPE',
      payload:{
        image,
        gif
      } 
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
      type: 'AMOUNT_COMPLETED',
      payload: {
          number,
          time
      }
    };
  };

  export {
    choiceTypeTraining,
    choiceSumCount,
    SumCountMinus,
    loadMore
  };