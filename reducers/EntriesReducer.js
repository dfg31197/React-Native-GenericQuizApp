import { AppActionTypes } from "../actions/Actions";

const initState = {data: {},};

export const EntriesReducer = (state=initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case AppActionTypes.INIT:
      return state;

    default:
      return state;
  }
};
