import React from "react";
import "./film-list.css";
import FilmListItem from "./film-list-item/film-list-item";
import SliderContainer from "../slider/slider-container";

class FilmList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    // componentDidMount() {
    //     const { YouTubeIds, pageItems, current } = this.props.state;

    //     const from = current * pageItems - pageItems;
    //     const to = current * pageItems;
    //     const movies = filmIds.slice(from, to);

    //     const request = movies.map((id) => instance.get(`?i=${id}`));
    //     Promise.all(request).then((res) => {
    //         let result = res.map(function(e, i) {
    //             return Object.assign({}, e, YouTubeIds[i]);
    //         });
    //         return this.props.state.setFilms(result);
    //     });
    // }

    // onChangeShowFilm = () => {
    //     let { YouTubeIds, pageItems, current } = this.props.state;
    //     let count = current++;

    //     const from = count * pageItems - pageItems;
    //     const to = count * pageItems;

    //     const movies = filmIds.slice(from, to);

    //     const request = movies.map((id) => instance.get(`?i=${id}`));
    //     const requestMovie = Promise.all(request).then((res) => {
    //         // console.log(res);
    //         let result = res.map(function(e, i) {
    //             i = i + from;
    //             return Object.assign({}, e, YouTubeIds[i]);
    //         });
    //         return this.props.nextShowFilm(result);
    //     });
    // };

    render() {
        console.log(this.props);
        const { films } = this.props.state;

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
                    <div className="next-show" onClick={this.props.onChangeShowFilm}>
                        NEXT SHOW
                    </div>
                    <SliderContainer />
                    <div className="film-list-item-wrapper">{elements}</div>
                </div>
            </div>
        );
    }
}

export default FilmList;
