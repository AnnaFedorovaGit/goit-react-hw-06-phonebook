import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contactsReducer'
import { filterReducer } from './filterReducer'

const rootReducer = combineReducers({ 
    contacts: contactsReducer,
    filter: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);