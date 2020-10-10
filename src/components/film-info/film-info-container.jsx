import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setFilmInfo , setCardShop} from "../../redux/films-reducer";
import FilmInfo from "../film-info/film-info";

class FilmInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        const id = this.props.match.params.filmId;
        this.props.setFilmInfo(id);
    }

    render() {

        return <FilmInfo filmInfo={this.props.filmInfo} setCardShop={this.props.setCardShop}/> ;
    }
}

const mapStateToProps = (state) => {
    return {
        filmInfo: state.filmPage.filmInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilmInfo: (film) => dispatch(setFilmInfo(film)),
        setCardShop: (id) => dispatch(setCardShop(id))
    };
};

const FilmInfoWithRouter = withRouter(FilmInfoContainer);

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfoWithRouter);
