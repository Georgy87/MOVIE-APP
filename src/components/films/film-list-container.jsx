import React from "react";
import { connect } from "react-redux";
import FilmList from "./film-list";
import { setFilms,  nextShowFilm } from "../../redux/films-reducer";

const mapStateToProps = (state) => {
    const { filmPage } = state;
    console.log(filmPage)
    return {
        films: filmPage.films,
        current: filmPage.current,
        YouTubeIds: filmPage.YouTubeIds,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (film) => dispatch(setFilms(film)),
        nextShowFilm: (count) => dispatch(nextShowFilm(count))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
