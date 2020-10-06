const initialState = {
    films: [],
};

const FilmsReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET-FILMS":
            return {
                ...state,
                films: actions.films,
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

export default FilmsReducer;
