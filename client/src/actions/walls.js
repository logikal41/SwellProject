import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const SELECT_WALL = 'SELECT_WALL';


  export const selectWall= (wall) => {
    return dispatch => {
      dispatch({ type: SELECT_WALL, payload: wall });
    }
  }

  export const createWall = ({ id, name, description}) => {
    return dispatch => {
    axios.post('../api/walls', { area_id: id, name, description })
      .then( res => {
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to create wall', 'red'));
      })  
    } 
  }

  export const deleteWall = (id) => {
    return dispatch => {
    axios.delete(`../api/walls/${id}`)
      .then( res => {
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to delete Wall', 'red'));
      })  
    } 
  }
