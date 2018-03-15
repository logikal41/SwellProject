import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';
import { selectWall } from './walls';

export const SELECT_ROUTE = 'SELECT_ROUTE';
export const GET_ROUTES = 'GET_ROUTES';
export const DELETE_ROUTE = 'DELETE_ROUTE';
export const CLEAR_ROUTES = 'CLEAR_ROUTES';

export const selectRoute = (route) => {
    return dispatch => {
      dispatch({ type: SELECT_ROUTE, payload: route });
    }
  }

export const clearRoutes = () => { 
  return dispatch => {
    dispatch({ type: CLEAR_ROUTES });
  }
}

export const getRoutes = (wall_id) => {
  return dispatch => {
    axios.get(`/api/walls/${wall_id}`)
      .then( res => {
        dispatch({ type: GET_ROUTES, payload: res.data.routes });
        dispatch(selectWall(res.data.wall));
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to get routes', 'red'));
      })
    }
}

export const createRoute = ({ id, name, description}, callBack) => {
  return dispatch => {
  axios.post('../api/routes', { wall_id: id, name, description })
    .then( res => {
      dispatch(setHeaders(res.headers));
    })
    .then( () => callBack() )
    .catch( err => {
      dispatch(setFlash('Failed to create route', 'red'));
    })  
  } 
}

export const deleteRoute = (id) => {
  return dispatch => {
  axios.delete(`../api/routes/${id}`)
    .then( res => {
      dispatch({ type: DELETE_ROUTE, payload: id });
      dispatch(setHeaders(res.headers));
    })
    .catch( err => {
      dispatch(setFlash('Failed to delete route', 'red'));
    })  
  } 
}