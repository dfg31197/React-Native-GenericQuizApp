export const AppActionTypes = {
  INIT: 'AppActionTypes/INIT',
  ADD_QUESTION: 'AppActionTypes/ADD_QUESTION'
};

export const AppActions = {
  init: payload => ({type: AppActionTypes.INIT,payload}),
  addQuestion: payload => ({type: AppActionTypes.ADD_QUESTION,payload}),
};
