import React from "react";
import { connect } from "react-redux";
import Example from "../pleayer/player";

const mapStateToProps = (state) => {
    const [info] = state.filmPage.filmInfo;

    return {
        id: info,
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Example);
