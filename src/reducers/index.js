import { combineReducers } from 'redux';
import { contacts } from './contact.reducer';

export const rootReducer = combineReducers({contacts});