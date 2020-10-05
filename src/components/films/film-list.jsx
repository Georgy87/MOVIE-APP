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

        const pageItems = 3;
        const current = 1;
        const from = current * pageItems - pageItems;
        const to = current * pageItems;
        const movies = filmIds.slice(from , to);


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

        async function getMovies(newMovies) {
            const request = movies.map((id) => instance.get(`?i=${id}`));
            const requestMovie = await Promise.all(request);

             // dev added likes and important to movieArray

            requestMovie.map(el => {
                el.liked = true;
                return el;
            })
            console.log(requestMovie);
        }

        getMovies();

        // delete IdsArray

        // const index = filmIds.findIndex(item => item === "tt0071562");
        // const before = filmIds.slice(0, index);
        // const after = filmIds.slice(index + 1);
        // const newArray = [...before, ...after];

        // searchMovies

        // async function searchMovies() {
        //     const request = await instance.get(`?s=black mirror`);
        //     console.log(request);
        // }

        // searchMovies('batman');

    }

    render() {
        console.log(this.state);
        return <div className="film-list">Hello</div>;
    }
}

export default FilmList;
