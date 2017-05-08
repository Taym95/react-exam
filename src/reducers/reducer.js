/**
 * Created by thomashourlier on 2/26/17.
 */

import {combineReducers} from 'redux';
import {postJedi} from '../actions/action';

export const ADD_JEDI = 'ADD_JEDI';

export const addJedi = ({jedi}) => ({type: ADD_JEDI, payload: {
    jedi
  }});
function jediReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_FINISH':
      return [
        ...action.payload,
        ...state
      ];
    case ADD_JEDI:
      const jedi = {
        id: state.length + 1,
        name: action.payload.jedi
      }
      postJedi(jedi);
      return [
        ...state,
        jedi
      ];
    default:
      return state;
  }
}

export default combineReducers({jedi: jediReducer});
