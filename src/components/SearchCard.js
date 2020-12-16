import React from "react";

export default function SearchCard(props) {
    const style = {
        border: `black 2px solid`,
        borderRadius: "5px",
        backgroundImage: `url(${props.data.strDrinkThumb})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-end`,
        // paddingBottom: `10px`,
    };

    const titleStyle = {
        fontWeight: `900`,
        borderTop: `black 2px solid`,
        background: `white`,
        height: `3.5em`,
        lineHeight: `1em`,
        marginTop: `20px`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
    };

    return (
        <div style={style}>
            <p style={titleStyle}>{props.data.strDrink}</p>
        </div>
    );
}
