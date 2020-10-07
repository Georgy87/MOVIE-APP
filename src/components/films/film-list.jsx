import React from "react";
import "./film-list.css";
import { filmIds } from "../film-Ids/film-ids";
import instance from "../api/api";
import FilmListItem from "./film-list-item/film-list-item";

class FilmList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: null,
        };
    }

    componentDidMount() {
        // Pagination

        const pageItems = 4;
        const current = 1;
        const from = current * pageItems - pageItems;
        const to = current * pageItems;
        const movies = filmIds.slice(from, to);

        const request = movies.map((id) => instance.get(`?i=${id}`));

        const requestMovie = Promise.all(request).then((res) => {
            return this.props.setFilms(res);
        });

        // console.log(this.props);
        // this.props.setFilms(requestMovie);
        // dev added likes and important to movieArray

        // requestMovie.map(el => {
        //     el.liked = true;
        //     return el;
        // })
        // console.log(requestMovie);

        // delete IdsArray

        // const index = filmIds.findIndex(item => item === "tt0071562");
        // const before = filmIds.slice(0, index);
        // const after = filmIds.slice(index + 1);
        // const newArray = [...before, ...after];

        // searchMovies

        // async function searchMovies() {
        //     const request = await instance.get(`?s=black mirror`);
        //     console.log(request);
        // }

        // searchMovies('batman');
    }

    render() {
        const { films } = this.props;

        const elements = films.map((film) => {
            console.log(film);
            return (
                <FilmListItem
                    key={film.imdbID}
                    id={film.imdbID}
                    poster={film.Poster}
                />
            );
        });
        return (
            <div className="film-list-wrapper">
                <div className="film-list-item-wrapper">{elements}</div>
            </div>
        );
    }
}

export default FilmList;
