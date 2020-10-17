import React from "react";
import "./film-list.css";
import FilmListItem from "./film-list-item/film-list-item";
import SliderContainer from "../slider/slider-container";

class FilmList extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
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
