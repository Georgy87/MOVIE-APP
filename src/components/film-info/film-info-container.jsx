import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setFilmInfo, setLikeBox } from "../../redux/films-reducer";
import { setCartShop } from "../../redux/cart-shop-reducer";

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
        return (
            <FilmInfo
                filmInfo={this.props.filmInfo}
                setCartShop={this.props.setCartShop}
                setLikeBox={this.props.setLikeBox}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filmInfo: state.filmPage.filmInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilmInfo: (film) => dispatch(setFilmInfo(film)),
        setCartShop: (id) => dispatch(setCartShop(id)),
        setLikeBox: (film) => dispatch(setLikeBox(film)),
    };
};

const FilmInfoWithRouter = withRouter(FilmInfoContainer);

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfoWithRouter);
