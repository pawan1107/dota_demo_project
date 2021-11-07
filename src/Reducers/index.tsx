import { combineReducers } from 'redux';
import ConstantReducer from './ConstantReducer';

export default combineReducers({
  constant: ConstantReducer
});