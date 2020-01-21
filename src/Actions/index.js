const choicePushUp = (choice) => {
    return {
      type: 'WORK_CHOICE_PUSHUP',
      payload: choice
    };
  };
  const choicePullUp = (choice) => {
    return {
      type: 'WORK_CHOICE_PULLUP',
      payload: choice
    };
  };
  const choiceSumCount = (number) => {
    return {
      type: 'CHOICE_SUM_COUNT',
      payload: number
    };
  };
   

  export {
    choicePullUp,
    choicePushUp,
    choiceSumCount
  };