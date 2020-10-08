import React from "react";
import { connect } from "react-redux";
import FilmList from "./film-list";
import { setFilms,  nextShowFilm } from "../../redux/films-reducer";

const mapStateToProps = (state) => {
    return {
        films: state.filmPage.films,
        current: state.filmPage.current
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (film) => dispatch(setFilms(film)),
        nextShowFilm: (count) => dispatch(nextShowFilm(count))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
