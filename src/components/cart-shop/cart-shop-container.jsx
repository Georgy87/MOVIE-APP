// import React from "react";
import { connect } from "react-redux";
import CartShop from "./cart-shop";
import { setCartShopFilms, deleteCartShopFilm } from "../../redux/cart-shop-reducer";

const mapStateToprops = (state) => {

    return {
        cartShop: state.cartShopPage.cartShop,
        state: state.filmPage,
        cartShopFilms: state.cartShopPage.cartShopFilms
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        setCartShopFilms: (films) => dispatch(setCartShopFilms(films)),
        deleteCartShopFilm: (id) => dispatch(deleteCartShopFilm(id))
    };
};
export default connect(mapStateToprops, mapDispatchToprops)(CartShop);
