import React from "react";
import "./cart-shop-item.css";

const CartShopItem = (props) => {
    console.log(props)
    return (
        <>
            <div className="cart-info-item">
                <div className="cart-info-item-content">
                    <img src={props.poster} alt="poster" />
                    <div className="cart-info-descr-title">
                        {props.title}
                    </div>
                    <div className="delete-cart" >Удалить</div>
                </div>
                <hr className="cart-info-item-hr" />
            </div>
        </>
    );
};

export default CartShopItem ;

// onClick={() => deleteFilm(id)}