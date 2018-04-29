import { AppActionTypes } from "../actions/Actions";

const initState = {
    byId: {},
    allIds: []
};
export const EntriesReducer = (state=initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case AppActionTypes.INIT:
      return {...payload};

    case AppActionTypes.ADD_QUESTION:
    return {
      ...state,
      byId:{
        ...state.byId,
        [payload.parentId]: {
          ...state.byId[payload.parentId],
          questions: [...state.byId[payload.parentId].questions, {
            id: payload.questionId,
            statement: payload.question,
            result: payload.answer
          }]
        }
      }
    }

    case AppActionTypes.ADD_DECK:
    return {
      ...state,
      byId:{
        ...state.byId,
        [payload.id]:{
          id: payload.id,
          name: payload.name,
          questions: []
        },
      },
      allIds: [payload.id, ...state.allIds]
    }
    default:
      return state;
  }
};
