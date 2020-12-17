import React from "react";

export default function Footer() {
    const footerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: "30px",
        bottom: "0",
        backgroundColor: "rgba(180, 183, 199, 0.5)",
    };

    return (
        <div style={footerStyle}>
            © 2020 Copyright: Breakdown Circulation, Inc., All rights reserved.
        </div>
    );
}
