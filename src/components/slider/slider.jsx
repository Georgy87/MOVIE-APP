import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
export default class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const settings = {
            autoplay: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnFocus: true,

            // variableWidth: true
        };

        const element = this.props.films.map((el) => {
            return (
                <div>
                    <img
                        style={{
                            width: "150px",
                            margin: "0 auto",
							borderRadius: "5px",
							boxShadow: "0px 12px 23px"
                        }}
                        src={el.Poster}
                        alt=""
                    />
                </div>
            );
        });
        return (
            <div style={{ backgroundColor: "rgba(34, 0, 0, 0.85)", boxShadow: "0px 10px 20px", height: "300px" }}>
                <div
                    style={{
                        width: "1000px",
                        margin: "0 auto",
                        marginTop: "150px",
                        padding: "30px",
                    }}
                >
                    <Slider {...settings}>{element}</Slider>
                    <div className="slider-line"></div>
                </div>
            </div>
        );
    }
}
