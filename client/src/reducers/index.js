import { combineReducers } from 'redux';
import user from './reducer_user';
import flash from './reducer_flash';
import members from './reducer_members';
import selectedArea from './reducer_selectedArea';
import selectedWall from './reducer_selectedWall';
import selectedGroup from './reducer_selectedGroup';
import selectedRoute from './reducer_selectedRoute';
import routes from './reducer_routes';

const rootReducer = combineReducers({
  user,
  flash,
  selectedGroup,
  selectedArea,
  selectedWall,
  selectedRoute,
  members,
  routes,
});

export default rootReducer;
