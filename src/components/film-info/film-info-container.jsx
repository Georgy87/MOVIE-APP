import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { setFilmInfo, setLikeBox } from "../../redux/films-reducer";
import { setCartShopFilmsNew } from "../../redux/cart-shop-reducer"

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
                setLikeBox={this.props.setLikeBox}
                setCartShopFilmsNew={this.props.setCartShopFilmsNew}
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
        setLikeBox: (film) => dispatch(setLikeBox(film)),
        setCartShopFilmsNew: (film) => dispatch(setCartShopFilmsNew(film))
    };
};

const FilmInfoWithRouter = withRouter(FilmInfoContainer);

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfoWithRouter);
