import React from "react";
import "./App.css";
import Header from "./components/header/header";
import FilmListContainer from "./components/films/film-list-container";


const App = (props) => {
    return (
        <div className="app">
            <div className="app-wrapper">
                <Header />
                <FilmListContainer />
            </div>
        </div>
    );
}

export default App;
