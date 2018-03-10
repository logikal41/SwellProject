import { SELECT_ROUTE } from '../actions/routes';

const selectedRoute = (state = null, action) => {
    switch (action.type) {
      case SELECT_ROUTE:
        return action.payload;
      default:
        return state;
    }
  };

  export default selectedRoute;