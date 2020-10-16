import { createStore, combineReducers, applyMiddleware  } from "redux";
import FilmsReducer from "./films-reducer";
import cartShopReducer from "./cart-shop-reducer";
import ReduxThunk from "redux-thunk";

import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    filmPage: FilmsReducer,
    cartShopPage: cartShopReducer,
    form: formReducer
});


const saveState = (state) => {

    try {
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
        // Log errors here, or ignore
    }
};

const loadState = () => {
    try {
        // Load the data saved in localStorage, against the key 'app_state'
        const serialisedState = window.localStorage.getItem('app_state');

        // Passing undefined to createStore will result in our app getting the default state
        // If no data is saved, return undefined
        if (!serialisedState) return undefined;

        // De-serialise the saved state, and return it.
        return JSON.parse(serialisedState);
    } catch (err) {
        // Return undefined if localStorage is not available,
        // or data could not be de-serialised,
        // or there was some other error
        return undefined;
    }
};

/**
 * This is where you create the app store
 */
// const oldState = loadState();
const store = createStore(reducers, applyMiddleware(ReduxThunk));
store.subscribe(() => {
    saveState(store.getState());
});

window.store = store;
export default store;
