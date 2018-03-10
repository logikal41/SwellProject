import axios from 'axios';
import { setHeaders } from './headers';
import { setFlash } from './flash';

export const GET_WALLS = 'GET_WALLS';
export const SELECT_WALL = 'SELECT_WALL';

export const getWalls = (area_id) => {
  return dispatch => {
    axios.get(`/api/areas/${area_id}/walls`)
      .then( res => {
        dispatch({ type: GET_WALLS, walls: res.data });
        dispatch(setHeaders(res.headers));
      })
      .catch( err => {
        dispatch(setFlash('Failed to get walls', 'red'));
      })
   }
  };

  export const selectWall= (wall) => {
    return dispatch => {
      dispatch({ type: SELECT_WALL, payload: wall });
    }
  }