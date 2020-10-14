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


        // const request = newArray.map((id) => {
        //     return instance.get(`?i=${id}`);
        // });
        // Promise.all(request).then((res) => {
        //     this.props.setCartShopFilms(res);
        // });
    }

    render() {
        const { deleteCartShopFilm } = this.props;
        const element =
            this.props.cartShopFilms === null
                ? console.log("null")
                : this.props.cartShopFilms.map((el) => {
                      return (
                          <CartShopItem
                              key={el.imdbID}
                              cartShop={this.props.cartShopFilms}
                              deleteCartShopFilm={deleteCartShopFilm}
                              title={el.Title}
                              poster={el.Poster}
                              id={el.imdbID}
                          />
                      );
                  });
        return (
            <div>
                <div className="cart-info-wrapper">{element}</div>
            </div>
        );
    }
}

export default CartShop;
