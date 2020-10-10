import React from "react";
import "./cart-shop-item.css";

const CartShopItem = (props) => {
    const elements = props.cartShop.map(el => {
        return (
            <>
                <img src={el.Poster} alt="poster" />
                <div className="descr-wrapper">
                    <div className="descr-title">{el.Title}</div>
                </div>
            </>
        );
    })

    return (
        <div>
            {elements}
        </div>
    );
};

export default CartShopItem ;