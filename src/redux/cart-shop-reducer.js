const initialState = {
    cartShop: [],
};

const cartShopReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET-CART-SHOP":
            return {
                ...state,
                cartShop: [...state.cartShop, actions.id],
            };
        default:
            return state;
    }
};

export const setCartShop = (id) => {
    return {
        type: "SET-CART-SHOP",
        id: id,
    };
};

export default cartShopReducer;
