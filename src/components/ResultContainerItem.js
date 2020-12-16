import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import DynamicScroller from "./scrolling/DynamicScroller";

export default function ResultContainerItem({ cocktails, search }) {
    return (
        <Fragment>
            {cocktails.length > 0 ? (
                <Fragment>
                    <h3>Alcoholic cocktails by {search}:</h3>
                    <DynamicScroller>
                        {cocktails.map((cocktail) => (
                            <Link
                                to={`cocktail/${cocktail.idDrink}`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <SearchCard data={cocktail} />
                            </Link>
                        ))}
                    </DynamicScroller>
                </Fragment>
            ) : (
                ``
            )}
        </Fragment>
    );
}
