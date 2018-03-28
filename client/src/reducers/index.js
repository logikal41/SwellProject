import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './reducer_user';
import flash from './reducer_flash';
import members from './reducer_members';
import activeList from './reducer_activeList';
import activeSelection from './reducer_activeSelection';

const rootReducer = combineReducers({
  user,
  flash,
  members,
  form: formReducer,
  activeList,
  activeSelection,
});

export default rootReducer;
