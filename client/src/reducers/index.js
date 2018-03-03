import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import areas from './areas';

const rootReducer = combineReducers({
  user,
  flash,
  areas,
});

export default rootReducer;
