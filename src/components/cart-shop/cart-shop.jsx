import React from "react";
import "./cart-shop.css";
import instance from "../api/api";
import CartShopItem from "./cart-shop-item/cart-shop-item";

class CartShop extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentDidMount() {
        const newArray = Array.from(new Set(this.props.cartShop));
        const request = newArray.map((id) => {
            return instance.get(`?i=${id}`);
        });
        Promise.all(request).then((res) => {
            this.props.setCartShopFilms(res)
        });
    }

    render() {
        const element = this.props.cartShopFilms === null ? console.log('null') :
        <CartShopItem cartShop={this.props.cartShopFilms} />

        return (
            <div>
                <div className="cart-info-wrapper">
                    {element}
                </div>
            </div>
        );
    }
}

export default CartShop;
