import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class FilmInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { match, location, history } = this.props;
        console.log(match);
    }

    render() {
        return <div style={{ color: "white" }}>Hello</div>;
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    };
};

const mapDispatchToProps = () => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmInfo);
