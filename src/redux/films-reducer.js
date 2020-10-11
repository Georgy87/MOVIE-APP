import { ids } from "../assets/you-tube-ids/you-tube-ids";

const initialState = {
    films: [],
    current: 1,
    filmInfo: [],
    YouTubeIds: ids,
    cardShop: [],
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

        case "SET-CARD-SHOP":
            return {
                ...state,
                cardShop: [...state.cardShop, actions.id],
            };

        case "FILTER-FILMS":
            // console.log(actions.text.length);

            // let element = state.films.length > 0 ?
            // state.films.filter(item => {
            //     return item.Title.indexOf(actions.text) > -1
            // }) : state.films;
            // console.log(state.films.length);
            return {
                ...state,
                films: [
                    ...state.films.filter((item) => {
                        return item.Title.indexOf(actions.text) > -1;
                    }),
                ],
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

export const setCardShop = (id) => {
    return {
        type: "SET-CARD-SHOP",
        id: id,
    };
};

export const filterFilms = (text) => {
    
    return {
        type: "FILTER-FILMS",
        text: text.message,
    };
};

export default FilmsReducer;
