export const SELECT_GROUP = 'SELECT_GROUP';

export const selectGroup = (group) => {
    return dispatch => {
      dispatch({ type: SELECT_GROUP, payload: group });
    }
  }