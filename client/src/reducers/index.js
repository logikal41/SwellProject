import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './reducer_user';
import flash from './reducer_flash';
import members from './reducer_members';
import selectedRoute from './reducer_selectedRoute';
import routes from './reducer_routes';
import initialValues from './reducer_initialValues';

const rootReducer = combineReducers({
  user,
  flash,
  selectedRoute,
  members,
  routes,
  form: formReducer,
  initialValues,
});

export default rootReducer;
