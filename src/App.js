import React from "react";
import "./App.css";
import FilmListContainer from "./components/films/film-list-container";
import { Route } from "react-router-dom";
import FilmInfo from "./components/film-info/film-info-container";
import CartShopContainer from "./components/cart-shop/cart-shop-container";
import HeaderContainer from "./components/header/header-container";

const App = () => {
    return (
        <div className="app">
                <HeaderContainer />
                
            <div className="app-wrapper">
                <Route path="/cartshop" render={() => <CartShopContainer />} />
                <Route path="/d" render={() => <FilmListContainer />} />
                <Route path="/filminfo/:filmId?" render={() => <FilmInfo />} />
            </div>
        </div>
    );
};

export default App;
