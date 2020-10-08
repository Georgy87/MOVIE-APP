import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div>
            <div className="header">
                <div className="header-descr">
                    MOVIES
                </div>
            </div>
            <div className="header-gradient"></div>
        </div>
    )
}

export default Header;