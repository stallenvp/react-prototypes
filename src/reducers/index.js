import { combineReducers } from 'redux';
import ClockReducer from './clock_reducer';

export default combineReducers({
    clock: ClockReducer
});