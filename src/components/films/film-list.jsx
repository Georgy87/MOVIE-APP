import React from "react";
import "./film-list.css";
import * as axios from "axios";
import { filmIds } from "../film-Ids/film-ids";

class FilmList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: null,
        };
    }

    componentDidMount() {

        // Pagination

        const pageItems = 1;
        const current = 1;
        const from = current * pageItems - pageItems;
        const to = current * pageItems;
        const movies = filmIds.slice(from , to);
        console.log(movies);

        // Axios

        const instance = axios.create({
            baseURL: 'http://www.omdbapi.com/'
        });

        // Axios interseptors

        interceptors(instance);

        function setParams(config) {
            config.params = {
                apikey: 'a1213c70'
            }
            return config;
        }

        function getData(response) {
            return response.data;
        }

        function interceptors(axios) {
            axios.interceptors.request.use(setParams);
            axios.interceptors.response.use(getData);
        }

        async function getMovies() {
            const request = movies.map((id) => instance.get(`?i=${id}`));
            console.log(request);
            const requestMovie = await Promise.all(request);
            console.log(requestMovie);
        }
        getMovies();
    }

    render() {
        return <div className="film-list">Hello</div>;
    }
}

export default FilmList;
