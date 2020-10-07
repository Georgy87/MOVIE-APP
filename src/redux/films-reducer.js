const initialState = {
    films: [],
    current: 1
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

export const countCurrent = (count) => {
    console.log(count);
    return {
        type: "NEXT-SHOW-FILMS",
        count: count
    }
}

export default FilmsReducer;
