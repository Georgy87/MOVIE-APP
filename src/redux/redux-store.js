import { createStore, combineReducers } from "redux";
import FilmsReducer from "./films-reducer";

const reducers = combineReducers({
    filmPage: FilmsReducer,
});
const store = createStore(reducers);
window.store = store;
export default store;
