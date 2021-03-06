import { ids } from "../assets/you-tube-ids/you-tube-ids";
import { filmIds } from "../assets/film-Ids/film-ids";
import instance from "../components/api/api";

const initialState = {
    films: [],
    current: 1,
    filmInfo: [],
    YouTubeIds: ids,
    likeBox: [],
    pageItems: 5,
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

        case "CHANGE-CURRENT":
            let count = actions.current++;
            console.log(state.current++);
            return {
                ...state,
                current: state.current++
            };

        case "SET-LIKE-BOX":
            return {
                ...state,
                likeBox: [...state.likeBox.concat(actions.film)]
            };

        case "FILTER-FILMS":
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

export const changeCurrent = (current) => {
    return {
        type: "CHANGE-CURRENT",
        current: current
    }
}

export const setFilmInfo = (id) => {
    return {
        type: "SET-FILM-INFO",
        filmId: id,
    };
};

export const filterFilms = (text) => {
    return {
        type: "FILTER-FILMS",
        text: text.message,
    };
};

export const setLikeBox = (film) => {
    return {
        type: "SET-LIKE-BOX",
        film: film,
    };
};

export const setFilmThunkCreator = (movies, YouTubeIds) => {
    return (dispatch) => {
        const request = movies.map((id) => instance.get(`?i=${id}`));

        const getFilms = async () => {
            await Promise.all(request).then((res) => {
                let result = res.map(function(e, i) {
                    return Object.assign({}, e, YouTubeIds[i]);
                });
                dispatch(setFilms(result));
            });
        }
        getFilms();
    }
}

    export const showNextFilmThunkCreator = (movies, YouTubeIds, from, current) => {

        return (dispatch) => {
            dispatch(changeCurrent(current));
            console.log(movies)
            const request = movies.map((id) => instance.get(`?i=${id}`));
            const getFilms = async () => {
                await Promise.all(request).then((res) => {
                    let result = res.map(function(e, i) {
                        i = i + from;
                        return Object.assign({}, e, YouTubeIds[i]);
                    });
                    dispatch(nextShowFilm(result));
                });
        }
        getFilms();
    }
}

export default FilmsReducer;
