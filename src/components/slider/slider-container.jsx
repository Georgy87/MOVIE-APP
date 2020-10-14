import React from "react";
import { connect } from "react-redux";
import SimpleSlider from "./slider";

const mapStateToProps = (state) => {
    console.log(state.filmPage.films);
    return {
        films: state.filmPage.films
    };
};

const mapDispatchToProps = () => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSlider);