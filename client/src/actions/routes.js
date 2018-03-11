import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const SELECT_ROUTE = 'SELECT_ROUTE';

export const selectRoute = (route) => {
    return dispatch => {
      dispatch({ type: SELECT_ROUTE, payload: route });
    }
  }

  export const createRoute = ({ id, name, description}) => {
    return dispatch => {
    axios.post('../api/routes', { wall_id: id, name, description })
      .then( res => {
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to create wall', 'red'));
      })  
    } 
  }

  export const deleteRoute = (id) => {
    return dispatch => {
    axios.delete(`../api/routes/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to delete Route', 'red'));
      })  
    } 
  }