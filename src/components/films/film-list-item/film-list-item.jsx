import React from "react";
import "./film-list-item.css";

const FilmListItem = (props) => {
    const { poster } = props;
    console.log(poster);
    return (
        <div>
            <div className="film-list-item">
                <img src={poster} alt="poster" />
            </div>
            <hr className="film-list-item-hr" />
        </div>
    );
};

export default FilmListItem;
