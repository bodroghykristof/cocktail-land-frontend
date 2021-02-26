import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/Header";
import { Home } from "./components/Home";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/layout/Footer";
import { SearchCocktails } from "./components/SearchCocktails";
import CocktailDetail from "./components/CocktailDetail";
import OwnCocktailDetail from "./components/ownCocktails/OwnCocktailDetail";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import PrivateRoute from "./auth/PrivateRoute";
import GuestRoute from "./auth/GuestRoute";
import About from "./components/About";
import OwnCocktail from "./components/ownCocktails/OwnCocktail";
import CreateOwnCocktail from "./components/ownCocktails/CreateOwnCocktail";

import { AllCocktailsProvider } from "./components/AllCocktailsContext";
import { IsLoggedInProvider } from "./auth/IsLoggedInContext";
import { FavoriteCocktails } from "./components/FavoriteCocktails";
import { FavoritesProvider } from "./components/FavoritesContext";
import { LanguageProvider } from "./components/language/LanguageContext";
import { AllIngredientsProvider } from "./components/ownCocktails/IngredientsContext";
import { OwnCocktailsProvider } from "./components/ownCocktails/OwnCocktailsContext";
import { CheckedIngredientsProvider } from "./components/ownCocktails/CheckedIngredientsContext";

import IngredientDetail from "./components/IngredientDetail";

const App = () => {
    let content = (
        <Router>
            <AllCocktailsProvider>
                <LanguageProvider>
                    <IsLoggedInProvider>
                        <FavoritesProvider>
                            <AllIngredientsProvider>
                                <CheckedIngredientsProvider>
                                    <OwnCocktailsProvider>
                                        <div className="app-container">
                                            <div className="App">
                                                <Route
                                                    exact
                                                    path="/"
                                                    component={Welcome}
                                                />
                                                <Route
                                                    path={[
                                                        "/home",
                                                        "/search-cocktails",
                                                        "/favorite-cocktails",
                                                        "/mine",
                                                        "/create-own",
                                                        "/cocktail/:id",
                                                        "/own-cocktail/:id",
                                                        "/ingredient/:name/:cocktailId",
                                                        "/about",
                                                        "/register",
                                                        "/login",
                                                    ]}
                                                >
                                                    <Header />
                                                    <GuestRoute
                                                        exact
                                                        path="/register"
                                                        component={Register}
                                                    />
                                                    <GuestRoute
                                                        exact
                                                        path="/login"
                                                        component={Login}
                                                    />
                                                    <Route
                                                        exact
                                                        path="/home"
                                                        component={Home}
                                                    />
                                                    <Route
                                                        exact
                                                        path="/about"
                                                        component={About}
                                                    />
                                                    <Route
                                                        exact
                                                        path="/search-cocktails"
                                                        component={
                                                            SearchCocktails
                                                        }
                                                    />
                                                    <Route
                                                        exact
                                                        path="/cocktail/:id"
                                                        component={
                                                            CocktailDetail
                                                        }
                                                    />
                                                    <Route
                                                        exact
                                                        path="/ingredient/:name/:cocktailId"
                                                        component={
                                                            IngredientDetail
                                                        }
                                                    />
                                                    <PrivateRoute
                                                        path="/favorite-cocktails"
                                                        component={
                                                            FavoriteCocktails
                                                        }
                                                    />
                                                    <PrivateRoute
                                                        path="/mine"
                                                        component={OwnCocktail}
                                                    />
                                                    <PrivateRoute
                                                        path="/create-own"
                                                        component={
                                                            CreateOwnCocktail
                                                        }
                                                    />
                                                    <PrivateRoute
                                                        path="/own-cocktail/:id"
                                                        component={
                                                            OwnCocktailDetail
                                                        }
                                                    />
                                                </Route>
                                            </div>
                                            <Footer />
                                        </div>
                                    </OwnCocktailsProvider>
                                </CheckedIngredientsProvider>
                            </AllIngredientsProvider>
                        </FavoritesProvider>
                    </IsLoggedInProvider>
                </LanguageProvider>
            </AllCocktailsProvider>
        </Router>
    );
    return content;
};

export default App;
