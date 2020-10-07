import React from "react";
import "./App.css";
import Header from "./components/header/header";
import FilmListContainer from "./components/films/film-list-container";


const App = (props) => {
    console.log(props);
    return (
        <div className="app-wrapper">
            <Header />
            <FilmListContainer />
        </div>
    );
}

export default App;
