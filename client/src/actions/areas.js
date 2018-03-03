import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const getAreas = () => {
  return dispatch => {
    axios.get('/api/areas')
      .then( res => {
        dispatch({ type: 'GET_AREAS', areas: res.data });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to get areas', 'red'));
      })
   }
  };

  export const deleteArea = (id) => {
    return dispatch => {
    axios.delete(`api/areas/${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_AREA', area: id });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to delete Area', 'red'));
      })  
    } 
  }

  export const selectArea = (id) => {
    return dispatch => {
      dispatch({ type: 'SELECT_AREA', area: id });
    }
  }