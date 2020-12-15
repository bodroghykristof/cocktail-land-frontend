import React from "react";

export default function Footer() {
    const footerStyle = {
        position: "absolute",
        width: "100%",
        bottom: "0px",
    };

    return (
        <div style={footerStyle}>
            © 2020 Copyright: Breakdown Circulation, Inc., All rights reserved.
        </div>
    );
}
