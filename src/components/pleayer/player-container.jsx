import React from "react";
import { connect } from "react-redux";
import Example from "../pleayer/player";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        
    }
}

const mapDispatchToProps = () => {
    return {

    }
}
console.log('hello')
export default connect(mapStateToProps, mapDispatchToProps)(Example);
