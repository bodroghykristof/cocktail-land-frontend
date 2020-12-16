import "./App.css";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AllCocktailsProvider } from "./components/AllCocktailsContext";
import { Home } from "./components/Home";
import Welcome from "./components/Welcome";
import Footer from "./components/layout/Footer";
import { SearchCocktails } from "./components/SearchCocktails";
import CoctailDetail from './components/CoctailDetail';
import React from 'react';


import { FavoriteCocktails } from './components/FavoriteCocktails';
import { FavoritesProvider } from './components/FavoritesContext';

const App = () => {
  let content = (
    <Router>
      <AllCocktailsProvider>
        <FavoritesProvider>
          <div className='App'>
            <Route exact path='/' component={Welcome} />
            <Route path={['/home', '/search-cocktails', '/favorite-cocktails', "/coctail-detail/:id"]}>
              <Header />
              <Route exact path='/home' component={Home} />
              <Route exact path='/search-cocktails' component={SearchCocktails} />
              <Route exact path="/coctail-detail/:id" component={CoctailDetail} />
              <Route path="/favorite-cocktails" render={() => (
                  <React.Fragment>
                    <FavoriteCocktails/>
                  </React.Fragment>
              )} 
              />
              <Footer />
            </Route>
          </div>
        </FavoritesProvider>
      </AllCocktailsProvider>
    </Router>
  );
  return content;
};

export default App;
