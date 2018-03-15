import { GET_ROUTES, DELETE_ROUTE, CLEAR_ROUTES } from '../actions/routes';

const routes = (state = [], action) => {
    switch (action.type) {
      case GET_ROUTES:
        return action.payload;
      case DELETE_ROUTE:
        return state.filter( route => route.id !== action.payload );
      case CLEAR_ROUTES:
        return [];
    //   case CREATE_ROUTE:
    //     return [action.payload, ...state];
    //   case UPDATE_ROUTE:
    //     const originalState = state.filter(route => route.id !== route.payload.id);
    //     return [ action.area, ...originalState];
      default:
        return state;
    }
  };

  export default routes;
  