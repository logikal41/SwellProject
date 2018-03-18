import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const UPDATE_AREA = 'UPDATE_AREA';

export const deleteArea = (id, callBack) => {
  return dispatch => {
  axios.delete(`../api/areas/${id}`)
    .then( res => {
      dispatch(setHeaders(res.headers));
    })
    .then( () => callBack() )
    .catch( err => {
      dispatch(setFlash('Failed to delete Area', 'red'));
    })  
  } 
}

export const updateArea = ({id, name, description}) => {
  return dispatch => {
  axios.put(`api/areas/${id}`, { name, description })
    .then( res => {
      dispatch({ type: UPDATE_AREA, area: res.data });
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to update area', 'red'));
    })  
  } 
}

export const createArea = ({name, description}, callBack) => {
  return dispatch => {
  axios.post('../api/areas', { group_id: 1, name, description })
    .then( res => {
      dispatch(setHeaders(res.headers));
    })
    .then( () => callBack() )
    .catch( err => {
      dispatch(setFlash('Failed to create area', 'red'));
    })  
  } 
}