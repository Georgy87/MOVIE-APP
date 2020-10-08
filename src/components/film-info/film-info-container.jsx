import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setFilmInfo } from "../../redux/films-reducer";

class FilmInfo extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        console.log(this.props.match.params.filmId);
        console.log(this.props);
    }

    render() {
        return <div style={{ color: "white" }}>Hello</div>;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilmInfo: (film) => dispatch(setFilmInfo(film))
    };
};

const FilmInfoWithRouter = withRouter(FilmInfo);

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfoWithRouter);
