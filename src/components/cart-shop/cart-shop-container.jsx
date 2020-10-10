import React from "react";
import { connect } from "react-redux";
import CartShop from "./cart-shop";

const mapStateToprops = (state) => {
    console.log(state);
    return {
        cartShop: state.filmPage.cardShop
    };
};

const mapDispatchToprops = () => {
    return {};
};
export default connect(mapStateToprops, mapDispatchToprops)(CartShop);
