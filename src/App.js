import React from "react";
import "./App.css";
import FilmListContainer from "./components/films/film-list-container";

const App = () => {
    return (
        <div className="app-wrapper">
            <FilmListContainer />
        </div>
    );
}

export default App;
