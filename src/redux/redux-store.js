import { createStore, combineReducers } from "redux";
import FilmsReducer from "./films-reducer";
import cartShopReducer from "./cart-shop-reducer";

import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    filmPage: FilmsReducer,
    cartShopPage: cartShopReducer,
    form: formReducer
});
const store = createStore(reducers);
window.store = store;
export default store;
