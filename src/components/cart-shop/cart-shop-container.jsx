// import React from "react";
import { connect } from "react-redux";
import CartShop from "./cart-shop";
import { setCartShopFilms } from "../../redux/cart-shop-reducer";

const mapStateToprops = (state) => {
  
    // if (filmPage.cardShop[0] != undefined) {
    //     const element = filmPage.cardShop.map(el => {
    //         let serialObj = JSON.stringify(el);
    //         console.log()
    //         return serialObj;
    //     })
    //     let data = window.localStorage.setItem('key', element);
    // }
    // let data = window.localStorage.getItem('key');
    // console.log(data);
    return {
        cartShop: state.cartShopPage.cartShop,
        state: state.filmPage,
        cartShopFilms: state.cartShopPage.cartShopFilms
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        setCartShopFilms: (films) => dispatch(setCartShopFilms(films))
    };
};
export default connect(mapStateToprops, mapDispatchToprops)(CartShop);
