import React from "react";
import "./film-info.css";
import PlayerContainer from "../pleayer/player-container";

const FilmInfo = (props) => {

    const [info] = props.filmInfo;
    console.log(info);
    const getShoppingСart = () => {
        props.setCardShop(info.imdbID)
    }

    const element = info === undefined ?
            console.log("no")
        : (
            <>
                <button onClick={getShoppingСart}>shopping card</button>
                <img src={info.Poster} alt="poster" />
                <div className="descr-wrapper">
                    <div className="descr-title">Title: {info.Title}</div>
                    <div className="descr-item-wrapper">
                        <div className="descr-item">
                            <b>Genre:</b> {info.Genre}
                        </div>
                        <div className="descr-item">
                            <b>Country:</b> {info.Country}
                        </div>
                        <div className="descr-item">
                            <b>Released:</b> {info.Released}
                        </div>
                        <div className="descr-item">
                            <b>Director:</b> {info.Director}
                        </div>
                        <div className="descr-item">
                            <b>Writer:</b> {info.Writer}
                        </div>
                        <div className="descr-item">
                            <b>Awards:</b> {info.Awards}
                        </div>
                        <div className="descr-item">
                            <b>Production:</b> {info.Production}
                        </div>
                        <div className="descr-item">
                            <b>Year:</b> {info.Year}
                        </div>
                        <div className="descr-item">
                            <b>Plot:</b> {info.Plot}
                        </div>
                        <PlayerContainer />
                    </div>
                </div>
            </>
        );
    return <div className="film-info-wrapper">{element}</div>;
};

export default FilmInfo;
