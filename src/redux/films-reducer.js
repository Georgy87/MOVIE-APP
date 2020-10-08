const initialState = {
    films: [],
    current: 1,
    filmInfo: null
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
                films:  [...state.films.concat(actions.count)],
            };

        case "SET-FILM-INFO":
            return {
                ...state,
                filmInfo: actions.filmInfo,
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
    console.log(count);
    return {
        type: "NEXT-SHOW-FILMS",
        count: count
    }
}

export const setFilmInfo = (film) => {
    return {
        type: "SET-FILM-INFO",
        filmInfo: film,
    };
};

export default FilmsReducer;
