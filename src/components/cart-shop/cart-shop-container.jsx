// import React from "react";
import { connect } from "react-redux";
import CartShop from "./cart-shop";
import { deleteCartShopFilm } from "../../redux/cart-shop-reducer";

const mapStateToprops = (state) => {
    return {
        cartShop: state.cartShopPage.cartShop,
        state: state.filmPage,
        cartShopFilms: state.cartShopPage.cartShopFilmsNew
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        deleteCartShopFilm: (id) => dispatch(deleteCartShopFilm(id))
    };
};
export default connect(mapStateToprops, mapDispatchToprops)(CartShop);
