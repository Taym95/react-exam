/**
 * Created by thomashourlier on 2/26/17.
 */

import {combineReducers} from 'redux';

export const POST_JEDI = 'POST_JEDI';


function jediReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_FINISH':
      return [
        ...action.payload,
        ...state
      ];
    case POST_JEDI:
    console.log(action.payload);
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default combineReducers({jedi: jediReducer});
