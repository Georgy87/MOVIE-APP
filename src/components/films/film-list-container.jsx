import React from "react";
import { connect } from "react-redux";
import FilmList from "./film-list";
import { setFilms,  nextShowFilm } from "../../redux/films-reducer";

const mapStateToProps = (state) => {
    const { filmPage } = state;
   console.log(filmPage);
    // if (filmPage.cardShop[0] != undefined) {
    //     const element = filmPage.cardShop.map(el => {
    //         let serialObj = JSON.stringify(el);
    //         console.log()
    //         return serialObj;
    //     })
    //     let data = window.localStorage.setItem('key', element);
    // }
    // let data = window.localStorage.getItem('key');
    // console.log(data);

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
