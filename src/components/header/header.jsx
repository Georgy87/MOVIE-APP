import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import instance from "../api/api";
import { filmIds } from "../../assets/film-Ids/film-ids";

const Header = (props) => {
    const searchFilm = (value) => {
        if (value.message !== undefined) {
            props.filterFilms(value);
        } else {
            const movies = filmIds.slice(0, 3);
            const request = movies.map((id) => instance.get(`?i=${id}`));
            Promise.all(request).then((res) => {
                return props.setFilms(res);
            });
        }
    };
    return (
        <div>
            <div className="header">
                <div className="header-descr">
                    <div>MOVIES</div>
                    <div className="header-search">
                        <HeaderReduxForm onChange={searchFilm} />
                    </div>
                    <NavLink to="/cartshop">
                        <div className="card-shop">Card shop</div>
                    </NavLink>
                </div>
            </div>
            <div className="header-gradient"></div>
        </div>
    );
};

const HeaderForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
            <div>
                <Field
                    className="header-search-input"
                    name="message"
                    component="input"
                    type="text"
                />
            </div>
        </form>
    );
};

const HeaderReduxForm = reduxForm({ form: "message" })(HeaderForm);

export default Header;
