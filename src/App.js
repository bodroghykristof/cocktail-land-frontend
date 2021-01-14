import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/layout/Header";
import { AllCocktailsProvider } from "./components/AllCocktailsContext";
import { Home } from "./components/Home";
import Welcome from "./components/welcome/Welcome";
import Footer from "./components/layout/Footer";
import { SearchCocktails } from "./components/SearchCocktails";
import CocktailDetail from "./components/CocktailDetail";
import Register from "./components/users/Register";
import Login from "./components/users/Login";
import PrivateRoute from "./auth/PrivateRoute";
import GuestRoute from "./auth/GuestRoute";

import { FavoriteCocktails } from "./components/FavoriteCocktails";
import { FavoritesProvider } from "./components/FavoritesContext";
import { LanguageProvider } from "./components/language/LanguageContext";

import IngredientDetail from "./components/IngredientDetail";

const App = () => {
    let content = (
        <Router>
            <AllCocktailsProvider>
                <LanguageProvider>
                    <FavoritesProvider>
                        <div className="app-container">
                            <div className="App">
                                <Route exact path="/" component={Welcome} />
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
                                    path={[
                                        "/home",
                                        "/search-cocktails",
                                        "/favorite-cocktails",
                                        "/cocktail/:id",
                                        "/ingredient/:name",
                                    ]}
                                >
                                    <Header />
                                    <Route
                                        exact
                                        path="/home"
                                        component={Home}
                                    />
                                    <Route
                                        exact
                                        path="/search-cocktails"
                                        component={SearchCocktails}
                                    />
                                    <Route
                                        exact
                                        path="/cocktail/:id"
                                        component={CocktailDetail}
                                    />
                                    <Route
                                        exact
                                        path="/ingredient/:name"
                                        component={IngredientDetail}
                                    />
                                    <PrivateRoute
                                        path="/favorite-cocktails"
                                        component={FavoriteCocktails}
                                    />
                                </Route>
                            </div>
                            <Footer />
                        </div>
                    </FavoritesProvider>
                </LanguageProvider>
            </AllCocktailsProvider>
        </Router>
    );
    return content;
};

export default App;
