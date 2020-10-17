import React, { Component } from "react";
import { connect } from "react-redux";
import FilmList from "./film-list";
import { setFilms, nextShowFilm, setFilmThunkCreator } from "../../redux/films-reducer";
import { filmIds } from "../../assets/film-Ids/film-ids";
import instance from "../api/api";
class FilmListContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        const { YouTubeIds, pageItems, current} = this.props;
        const from = current * pageItems - pageItems;
        const to = current * pageItems;
        const movies = filmIds.slice(from, to);
        this.props.setFilmThunkCreator(movies, YouTubeIds);
    }

    onChangeShowFilm = () => {
        let { YouTubeIds, pageItems, current } = this.props;
        let count = current++;

        const from = count * pageItems - pageItems;
        const to = count * pageItems;

        const movies = filmIds.slice(from, to);

        const request = movies.map((id) => instance.get(`?i=${id}`));
        const requestMovie = Promise.all(request).then((res) => {
            let result = res.map(function(e, i) {
                i = i + from;
                return Object.assign({}, e, YouTubeIds[i]);
            });
            return this.props.nextShowFilm(result);
        });
    };
    render() {
        return (
            <FilmList state={this.props} onChangeShowFilm={this.onChangeShowFilm} />
        );
    }
}

const mapStateToProps = (state) => {
    const { films, current, YouTubeIds, pageItems, newFilmIds } = state.filmPage;
    return {
        films: films,
        current: current,
        YouTubeIds: YouTubeIds,
        pageItems: pageItems,
        newFilmIds: newFilmIds
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilms: (film) => dispatch(setFilms(film)),
        nextShowFilm: (count) => dispatch(nextShowFilm(count)),
        setFilmThunkCreator: (from, to) => dispatch(setFilmThunkCreator(from, to))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmListContainer);
