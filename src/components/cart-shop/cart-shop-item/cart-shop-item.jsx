import React from "react";
import "./cart-shop-item.css";

const CartShopItem = ({id, title, poster, deleteCartShopFilm}) => {
    const onDeleteCart = (id) => {
        
        deleteCartShopFilm(id);
    }
    return (
        <>
            <div className="cart-info-item">
                <div className="cart-info-item-content">
                    <img src={poster} alt="poster" />
                    <div className="cart-info-descr-title">
                        {title}
                    </div>
                    <div className="delete-cart" onClick={() => onDeleteCart(id)}>Удалить</div>
                </div>
                <hr className="cart-info-item-hr" />
            </div>
        </>
    );
};

export default CartShopItem ;

// onClick={() => deleteFilm(id)}