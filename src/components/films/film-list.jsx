import React from "react";
import "./film-list.css";
import { filmIds } from "../../assets/film-Ids/film-ids";
import instance from "../api/api";
import FilmListItem from "./film-list-item/film-list-item";

class FilmList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: null,
            current: 1,
            currentNextPage: 2,
        };
    }

    componentDidMount() {
        async function searchMovies() {
            const request = await instance.get(`?s=black mirror`);
            console.log(request);
        }

        searchMovies();

        const { current } = this.state;
        const { YouTubeIds } = this.props;

        const pageItems = 2;

        const from = current * pageItems - pageItems;
        const to = current * pageItems;

        const movies = filmIds.slice(from, to);

        const request = movies.map((id) => instance.get(`?i=${id}`));
        const requestMovie = Promise.all(request).then((res) => {
            let result = res.map(function(e, i) {
                return Object.assign({}, e, YouTubeIds[i]);
            });
            return this.props.setFilms(result);
        });
    }

    onChangeShowFilm = () => {
        let count = this.state.currentNextPage++;

        const { YouTubeIds } = this.props;

        const pageItems = 2;

        const from = count * pageItems - pageItems;
        const to = count * pageItems;

        const movies = filmIds.slice(from, to);

        const request = movies.map((id) => instance.get(`?i=${id}`));
        const requestMovie = Promise.all(request).then((res) => {
            // console.log(res);
            let result = res.map(function(e, i) {
                i = i + from;
                console.log(i);
                console.log(YouTubeIds[i]);
                return Object.assign({}, e, YouTubeIds[i]);
            });
            return this.props.nextShowFilm(result);
        });
    };

    render() {
        const { films } = this.props;

        const elements = films.map((film) => {
            return (
                <div>
                    <FilmListItem
                        key={film.imdbID}
                        id={film.imdbID}
                        poster={film.Poster}
                        film={film}
                    />
                </div>
            );
        });

        return (
            <div>
                <div className="film-list-wrapper">
                    <div className="next-show" onClick={this.onChangeShowFilm}>
                        NEXT SHOW
                    </div>
                    <div className="film-list-item-wrapper">{elements}</div>
                </div>
            </div>
        );
    }
}

export default FilmList;

// console.log(this.props);
// this.props.setFilms(requestMovie);
// dev added likes and important to movieArray

// requestMovie.map(el => {
//     el.liked = true;
//     return el;
// });
// console.log(requestMovie);

// delete IdsArray

// const index = filmIds.findIndex(item => item === "tt0071562");
// const before = filmIds.slice(0, index);
// const after = filmIds.slice(index + 1);
// const newArray = [...before, ...after];

// searchMovies
