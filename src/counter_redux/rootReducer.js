import {combineReducers} from 'redux';
import counterReducer from './counter_reducer';

let rootReducer = combineReducers(
    {
        'counterKey':counterReducer
    }
);

export default rootReducer;