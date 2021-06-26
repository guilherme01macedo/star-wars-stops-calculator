import { combineReducers } from 'redux';
import calculatorReducer from '../features/calculatorPage/redux/reducer';

export default combineReducers({
  calculator: calculatorReducer,
});
