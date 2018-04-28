import { AppActionTypes } from "../actions/Actions";

const initState = {

    byId: {
      '139p0fhioevnepjovjqi': {
        id: '139p0fhioevnepjovjqi',
        name: 'Music',
        questions: [
          {
            'id': '13-9jfp0hieo2rwbufjkh',
            'statement': 'Is James Hetfield a table?',
            'result': true,
          },

          {
            'id': '13-9jfp0hieo2rwbufjkh-149r',
            'statement': 'Metal > Every other music',
            'result': true,
          },
        ],
      },
      '1p3ofhiub2r': {
        id: '1p3ofhiub2r',
        name: 'Dank Memes',
        questions: [
          {
            'id': '13[fopnirbjwlkmq;]',
            'statement': 'ur mom gay',
            'result': true,
          },

          {
            'id': '1390fhbioeuvji',
            'statement': 'bush did 9/11',
            'result': true,
          },
        ],
      },
      '1pibfeourhvjnqcoisodnvub': {
        id: '1pibfeourhvjnqcoisodnvub',
        name: 'Depression',
        questions: [
          {
            'id': 'p13ifobeuhjvkjni',
            'statement': 'how are you',
            'result': true,
          },

          {
            'id': '1pqf0eogjr2bihonuj-149r',
            'statement': 'Z U C C',
            'result': true,
          },
        ],
      },
    },
  allIds: ['139p0fhioevnepjovjqi', '1p3ofhiub2r', '1pibfeourhvjnqcoisodnvub']

};

export const EntriesReducer = (state=initState, action) => {
  const { payload } = action;
  switch (action.type) {
    case AppActionTypes.INIT:
      return state;

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
    default:
      return state;
  }
};
