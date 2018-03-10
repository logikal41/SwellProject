export const SELECT_ROUTE = 'SELECT_ROUTE';

export const selectRoute = (route) => {
    return dispatch => {
      dispatch({ type: SELECT_ROUTE, payload: route });
    }
  }