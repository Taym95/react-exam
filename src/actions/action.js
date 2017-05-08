/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';

export function fetchJedi() {
  return (dispatch) => {
    axios
      .get('http://localhost:3001/jedi')
      .then((res) => {
        dispatch({type: 'FETCH_FINISH', payload: res.data});
      })
  }
}

export function postJedi(jedi) {
 axios.post('http://localhost:3001/jedi', { id: jedi.id, name: jedi.name })
  .then(function(response){
    console.log('saved successfully')
  });  

}
