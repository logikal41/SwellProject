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
        dispatch({ type: 'DELETE_AREA', id });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to delete Area', 'red'));
      })  
    } 
  }

  export const updateArea = ({id, name, description}) => {
    return dispatch => {
    axios.put(`api/areas/${id}`, { name, description })
      .then( res => {
        dispatch({ type: 'UPDATE_AREA', area: res.data });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to update area', 'red'));
      })  
    } 
  }

  export const createArea = ({name, description}) => {
    return dispatch => {
    axios.post('api/areas', { name, description })
      .then( res => {
        dispatch({ type: 'CREATE_AREA', area: res.data });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to create area', 'red'));
      })  
    } 
  }

  export const selectArea = (area) => {
    return dispatch => {
      dispatch({ type: 'SELECT_AREA', area: area });
    }
  }