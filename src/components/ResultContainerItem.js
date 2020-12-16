import React, { Fragment } from "react";
import DynamicScroller from "./scrolling/DynamicScroller";
import SearchCard from "./SearchCard";

export default function ResultContainerItem({ cocktails, search }) {
    return (
        <Fragment>
            {cocktails.length > 0 ? (
                <Fragment>
                    <h3>Alcoholic cocktails by {search}:</h3>
                    <DynamicScroller>
                        {cocktails.map((cocktail) => (
                            <SearchCard data={cocktail} />
                        ))}
                    </DynamicScroller>
                </Fragment>
            ) : (
                ``
            )}
        </Fragment>
    );
}
