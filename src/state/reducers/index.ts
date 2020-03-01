import { combineReducers } from 'redux';

import { successReducer } from './successReducer';

export const rootReducer = combineReducers(successReducer);
