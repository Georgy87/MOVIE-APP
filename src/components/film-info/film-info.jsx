import React from "react";
import "./film-info.css";
import Example from "../pleayer/player";
const FilmInfo = (props) => {
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

    if (props.filmInfo === null) {
        console.log("no");
    } else {
        poster = props.filmInfo.Poster;
        title = props.filmInfo.Title;
        genre = props.filmInfo.Genre;
        country = props.filmInfo.Country;
        actors = props.filmInfo.Actors;
        released = props.filmInfo.Released;
        director = props.filmInfo.Director;
        writer = props.filmInfo.Writer;
        awards = props.filmInfo.Awards;
        production = props.filmInfo.Production;
        year = props.filmInfo.Year;
        plot = props.filmInfo.Plot;
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
                    <Example/>
                </div>
            </div>
        </div>
    );
};

export default FilmInfo;
