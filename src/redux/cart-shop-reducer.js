const initialState = {
    cartShop: [],
    cartShopFilms: null,
};

const cartShopReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET-CART-SHOP-IDS":
            // const newArray = Array.from(new Set(actions.id));

            return {
                ...state,
                cartShop: [...state.cartShop, actions.id],
            };
        case "SET-CART-SHOP-FILMS":
            return {
                ...state,
                cartShopFilms: actions.films,
            };
        case "DELETE-CART-SHOP-FILM": {
            return {
                ...state
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

export const setCartShopFilms = (films) => {
    return {
        type: "SET-CART-SHOP-FILMS",
        films: films,
    };
};

export const deleteCartShopFilm = (id) => {
    console.log(id);
    return {
        type: "DELETE-CART-SHOP-FILM"
    }
}

export default cartShopReducer;
