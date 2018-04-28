export const AppActionTypes = {
  INIT: 'AppActionTypes/INIT',
  ADD_QUESTION: 'AppActionTypes/ADD_QUESTION',
  ADD_DECK: 'AppActionTypes/ADD_DECK'
};

export const AppActions = {
  init: payload => ({ type: AppActionTypes.INIT, payload }),
  addQuestion: payload => ({ type: AppActionTypes.ADD_QUESTION, payload }),
  addDeck: payload => ({ type: AppActionTypes.ADD_DECK, payload })
};
