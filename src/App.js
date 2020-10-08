import React from "react";
import "./App.css";
import Header from "./components/header/header";
import FilmListContainer from "./components/films/film-list-container";
import { Route } from "react-router-dom";
import FilmInfo from "./components/films/film-info/film-info-container";

const App = () => {
    return (
        <div className="app">
                <Header />
            <div className="app-wrapper">
                <Route path="/d" render={() => <FilmListContainer />}/>
                <Route path="/filminfo" render={() => <FilmInfo />} />
            </div>
        </div>
    );
};

export default App;
