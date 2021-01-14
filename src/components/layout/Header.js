import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Private from "../../auth/Private";
import Guest from "../../auth/Guest";
import "../../components/css/header.scss";
import Toggle from "../language/Toggle";
import germany from "../../static/germany.png";
import uk from "../../static/united-kingdom.png";
import { LanguageContext } from "../language/LanguageContext";
import dictionary from "../language/Dictionary";
import logo from "../../static/logo.png";
import { IsLoggedInContext } from "../../auth/IsLoggedInContext";
import apiService from "../services/Api";

export default function Header() {
    const [language] = useContext(LanguageContext);
    const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);

    const logout = async () => {
        await apiService.logout(localStorage.getItem("token"));
        localStorage.clear();
        setIsLoggedIn(false);
    };

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <h1 className="header-title">Drink !T</h1>
            <div className="nav">
                <Link className="home-link" to="/home">
                    Home
                </Link>

                <Link className="link" to="/search-cocktails">
                    {dictionary.search[language]}
                </Link>
                <Private>
                    <Link className="link" to="/favorite-cocktails">
                        {dictionary.favourites[language]}
                    </Link>
                </Private>
                <Link className="link" to="#">
                    {dictionary.about[language]}
                </Link>
                <Guest>
                    {!isLoggedIn ? (
                        <Link className="link" to="/login">
                            Login
                        </Link>
                    ) : (
                        ""
                    )}
                </Guest>
                <Guest>
                    {!isLoggedIn ? (
                        <Link className="link" to="/register">
                            {dictionary.register[language]}
                        </Link>
                    ) : (
                        ""
                    )}
                </Guest>
                <Private>
                    <Link className="link" to="/home" onClick={logout}>
                        Logout
                    </Link>
                </Private>
            </div>
            <div className="language">
                <img src={uk} alt="uk flag"></img>
                <Toggle />
                <img src={germany} alt="german flag"></img>
            </div>
        </div>
    );
}
