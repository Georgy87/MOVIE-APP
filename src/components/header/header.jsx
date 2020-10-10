import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header-descr">
                    <div>MOVIES</div>
                    <NavLink to="/cartshop">
                        <div className="card-shop">Card shop</div>
                    </NavLink>
                </div>
            </div>
            <div className="header-gradient"></div>
        </div>
    );
};

export default Header;
