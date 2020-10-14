const initialState = {
    cartShopFilmsNew: []
};

const cartShopReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET-CART-SHOP-FILMS-NEW": {
            return {
                ...state,
                cartShopFilmsNew: Array.from(new Set([...state.cartShopFilmsNew.concat(actions.films)]))
            }
        }

        case "DELETE-CART-SHOP-FILM": {
            const index = state.cartShopFilmsNew.findIndex(elem => elem.imdbID === actions.id)
            const before = state.cartShopFilmsNew.slice(0, index);
            const after = state.cartShopFilmsNew.slice(index + 1);
            const newArray = [...after, ...before];
            return {
                ...state,
                cartShopFilmsNew: newArray
            }
        }
        default:
            return state;
    }
};

export const setCartShop = (id) => {
    return {
        type: "SET-CART-SHOP-IDS",
        id: id,
    };
};

export const setCartShopFilmsNew = (films) => {
    return {
        type: "SET-CART-SHOP-FILMS-NEW",
        films: films,
    };
};

export const deleteCartShopFilm = (id) => {
    return {
        type: "DELETE-CART-SHOP-FILM",
        id: id
    }
}

export default cartShopReducer;
