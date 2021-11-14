import { combineReducers } from 'redux';
import { constantData } from './ConstantReducer';
import { heroData } from './HeroDataReducers';

export default combineReducers({
  constantData,
  heroData
});