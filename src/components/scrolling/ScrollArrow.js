import React from "react";
import PropTypes from "prop-types";
import ScrollContainer from "./ScrollContainer";
import rightArrow from "../../static/rightArrow.svg";
import leftArrow from "../../static/leftArrow.svg";
import ArrowContainer from "./ArrowContainer";

const ScrollArrow = (props) => {
    let scrollAnimation;
    const difference = props.direction === "right" ? 2 : -2;

    const scroll = (event) => {
        scrollAnimation = setInterval(
            () =>
                (event.target.parentNode.parentNode.querySelector(
                    ScrollContainer
                ).scrollLeft += difference),
            5
        );
    };

    const stop = () => clearInterval(scrollAnimation);

    return (
        <ArrowContainer>
            <img
                onMouseOver={scroll}
                onMouseLeave={stop}
                src={props.direction === "right" ? leftArrow : rightArrow}
                alt={props.direction}
                height="60px"
            ></img>
        </ArrowContainer>
    );
};

ScrollArrow.propTypes = {
    direction: PropTypes.string,
    text: PropTypes.string,
};

export default ScrollArrow;
