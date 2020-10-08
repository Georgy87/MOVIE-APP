import React from "react";
import "./film-list-item.css";
import { NavLink } from "react-router-dom";

const FilmListItem = (props) => {
    const { poster, film } = props;
    return (
        <div>
            <div className="film-list-item">
                <NavLink to={`/filminfo/${film.imdbID}`}>
                    <img src={poster} alt="poster" />
                </NavLink>
            </div>
            <hr className="film-list-item-hr" />
        </div>
    );
};

export default FilmListItem;
