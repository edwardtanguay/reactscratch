import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

// attempted fix
// import { createStore } from 'redux';
// import { reducers } from './todos/reducers';
// const Store = createStore(reducers);

const reducers = {
	todos
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);

