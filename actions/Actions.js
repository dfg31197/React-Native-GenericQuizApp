export const AppActionTypes = {
  INIT: 'AppActionTypes/INIT',
};

export const AppActions = {
  init: payload => ({type:AppActionTypes.INIT,payload}),
};
