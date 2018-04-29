import { AsyncStorage } from 'react-native';
import { ASYNC_KEYS, INIT_STATE } from './Helpers';


export const API = {
  initData:() => {
    AsyncStorage.setItem(ASYNC_KEYS.STORAGE_KEY,JSON.stringify(INIT_STATE));
  },
  addDeck: () => ({}),

  getData: () => {
    return AsyncStorage.getItem(ASYNC_KEYS.STORAGE_KEY).then((res)=>{
      if(res === null) {
        API.initData();
        return INIT_STATE;
      }else {
        return JSON.parse(res)
      }
    })
  },

  clear: () => {
    AsyncStorage.clear(ASYNC_KEYS.STORAGE_KEY)
  },

  addQuestion: (parentId,questionId,ques,answer,oldArr) => {
    return AsyncStorage.mergeItem(ASYNC_KEYS.STORAGE_KEY, JSON.stringify({
      byId: {
        [parentId]: {
          questions: [...oldArr, {id: questionId, statement: ques, result: answer}]
        }
      }
    }))
  },

  addDeck: (id,name,oldArr) => {
    return AsyncStorage.mergeItem(ASYNC_KEYS.STORAGE_KEY,JSON.stringify({
      byId: {
        [id]:{
          id,
          name,
          questions:[]
        }
      },
      allIds: [id, ...oldArr],
    }))
  },

  getNotification: () => AsyncStorage.getItem(ASYNC_KEYS.NOTIFICATION_KEY)
}
