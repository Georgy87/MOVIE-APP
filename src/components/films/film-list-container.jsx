import React from "react";
import { connect } from "react-redux";
import FilmList from "./film-list";
import { setFilms,  countCurrent } from "../../redux/films-reducer";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        films: state.filmPage.films,
        current: state.filmPage.current
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (film) => dispatch(setFilms(film)),
        countCurrent: (count) => dispatch(countCurrent(count))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
