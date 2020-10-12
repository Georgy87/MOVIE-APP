// import React from "react";
import { connect } from "react-redux";
import Header from "./header";
import { filterFilms, setFilms } from "../../redux/films-reducer";


const mapStateToProps = (state) => {
    return {
        films: state.filmPage.films
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterFilms: (text) => dispatch(filterFilms(text)),
        setFilms: (film) => dispatch(setFilms(film))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
