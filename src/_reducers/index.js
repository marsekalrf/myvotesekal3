import { combineReducers } from 'redux';
import voteReducers from './voteReducers';
import sessionReducer from './sessionReducer';

export default combineReducers({
  voter: voteReducers,
});