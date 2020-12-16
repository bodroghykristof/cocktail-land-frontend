import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AllCocktailsProvider } from './components/AllCocktailsContext';
import { Home } from './components/Home';
import Welcome from './components/welcome/Welcome';
import Footer from './components/layout/Footer';
import { SearchCocktails } from './components/SearchCocktails';
import CocktailDetail from './components/CocktailDetail';
import React from 'react';

import { FavoriteCocktails } from './components/FavoriteCocktails';
import { FavoritesProvider } from './components/FavoritesContext';
import { LanguageProvider } from './components/language/LanguageContext';

const App = () => {
  let content = (
    <Router>
      <AllCocktailsProvider>
        <LanguageProvider>
          <FavoritesProvider>
            <div className='App'>
              <Route exact path='/' component={Welcome} />
              <Route
                path={[
                  '/home',
                  '/search-cocktails',
                  '/favorite-cocktails',
                  '/cocktail/:id',
                ]}
              >
                <Header />
                <Route exact path='/home' component={Home} />
                <Route
                  exact
                  path='/search-cocktails'
                  component={SearchCocktails}
                />
                <Route exact path='/cocktail/:id' component={CocktailDetail} />
                <Route
                  path='/favorite-cocktails'
                  render={() => (
                    <React.Fragment>
                      <FavoriteCocktails />
                    </React.Fragment>
                  )}
                />
                <Footer />
              </Route>
            </div>
          </FavoritesProvider>
        </LanguageProvider>
      </AllCocktailsProvider>
    </Router>
  );
  return content;
};

export default App;
