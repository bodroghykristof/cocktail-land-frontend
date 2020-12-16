import React from "react";
import ScrollContainer from "./ScrollContainer";
import ScrollContent from "./ScrollContent";
import ScrollArrow from "./ScrollArrow";

export default function DynamicScroller(props) {
    return (
        <div style={style}>
            <ScrollArrow direction="left" text="left" />
            <ScrollContainer>
                {props.children.map((element) => (
                    <ScrollContent
                        key={props.children.indexOf(element)}
                        background={element.strDrinkThumb}
                    >
                        {element}
                    </ScrollContent>
                ))}
            </ScrollContainer>
            <ScrollArrow direction="right" text="right" />
        </div>
    );
}

const style = {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
};
