import { ids } from "../assets/you-tube-ids/you-tube-ids";

const initialState = {
    films: [],
    current: 1,
    filmInfo: [],
    YouTubeIds: ids
};

const FilmsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET-FILMS":
            return {
                ...state,
                films: actions.film,
            };

        case "NEXT-SHOW-FILMS":
            return {
                ...state,
                films: [...state.films.concat(actions.count)],
            };

        case "SET-FILM-INFO":
            return {
                ...state,
                filmInfo: state.films.filter(
                    (item) => item.imdbID === actions.filmId
                ),
            };

        default:
            return state;
    }
};

export const setFilms = (film) => {
    return {
        type: "SET-FILMS",
        film: film,
    };
};

export const nextShowFilm = (count) => {
    return {
        type: "NEXT-SHOW-FILMS",
        count: count,
    };
};

export const setFilmInfo = (id) => {
    return {
        type: "SET-FILM-INFO",
        filmId: id,
    };
};

export default FilmsReducer;
