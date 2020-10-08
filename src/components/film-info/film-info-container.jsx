import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setFilmInfo } from "../../redux/films-reducer";
import instance from "../api/api";
import FilmInfo from "../film-info/film-info";

class FilmInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        const id = this.props.match.params.filmId;
        instance.get(`?i=${id}`).then(res => this.props.setFilmInfo(res));
    }

    render() {
        return <FilmInfo filmInfo={this.props.filmInfo}/> ;
    }
}

const mapStateToProps = (state) => {
    return {
        filmInfo: state.filmPage.filmInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilmInfo: (film) => dispatch(setFilmInfo(film))
    };
};

const FilmInfoWithRouter = withRouter(FilmInfoContainer);

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfoWithRouter);
