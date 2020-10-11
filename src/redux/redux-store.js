import { createStore, combineReducers } from "redux";
import FilmsReducer from "./films-reducer";

import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    filmPage: FilmsReducer,
    form: formReducer
});
const store = createStore(reducers);
window.store = store;
export default store;
