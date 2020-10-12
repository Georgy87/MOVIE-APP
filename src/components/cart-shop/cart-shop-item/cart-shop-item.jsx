import React from "react";
import "./cart-shop-item.css";

const CartShopItem = (props) => {
    console.log(props)
    const elements = props.cartShop.map(el => {

        return (
            <div>
                <div className="cart-info-item">
                    <img src={el.Poster} alt="poster" />
                    <div className="descr-wrapper">
                        <div className="descr-title">{el.Title}</div>
                    </div>
                    <hr className="cart-info-item-hr" />
                </div>
            </div>
        );
    })

    return (
        <div>
            {elements}
        </div>
    );
};

export default CartShopItem ;