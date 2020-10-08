import React from "react";
import "./film-info.css";

import PlayerContainer from "../pleayer/player-container";
const FilmInfo = (props) => {
    console.log(props)
    const [ info ] = props.filmInfo;
    console.log(info);

    let poster = null;
    let title = null;
    let genre = null;
    let country = null;
    let actors = null;
    let released = null;
    let director = null;
    let writer = null;
    let awards = null;
    let production = null;
    let year = null;
    let plot = null;

    if (info  === undefined) {
        console.log("no");
    } else {
        poster = info.Poster;
        title = info.Title;
        genre = info.Genre;
        country = info.Country;
        actors = info.Actors;
        released = info.Released;
        director = info.Director;
        writer = info.Writer;
        awards = info.Awards;
        production = info.Production;
        year = info.Year;
        plot = info.Plot;
    }

    return (
        <div className="film-info-wrapper">
            <img src={poster} alt="poster" />
            <div className="descr-wrapper">
                <div className="descr-title">Title: {title}</div>
                <div className="descr-item-wrapper">
                    <div className="descr-item">
                        <b>Genre:</b> {genre}
                    </div>
                    <div className="descr-item">
                        <b>Country:</b> {country}
                    </div>
                    <div className="descr-item">
                        <b>Released:</b> {released}
                    </div>
                    <div className="descr-item">
                        <b>Director:</b> {director}
                    </div>
                    <div className="descr-item">
                        <b>Writer:</b> {writer}
                    </div>
                    <div className="descr-item">
                        <b>Awards:</b> {awards}
                    </div>
                    <div className="descr-item">
                        <b>Production:</b> {production}
                    </div>
                    <div className="descr-item">
                        <b>Year:</b> {year}
                    </div>
                    <div className="descr-item">
                        <b>Plot:</b> {plot}
                    </div>
                    <PlayerContainer />
                </div>
            </div>
        </div>
    );
};

export default FilmInfo;
