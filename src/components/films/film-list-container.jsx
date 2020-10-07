import React from "react";
import { connect } from "react-redux";
import FilmList from "./film-list";
import { setFilms } from "../../redux/films-reducer";

const mapStateToProps = (state) => {
    return {
        films: state.filmPage.films,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (film) => dispatch(setFilms(film)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
