import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AllCocktailsProvider } from './components/AllCocktailsContext';
import { Home } from './components/Home';
import Welcome from './components/Welcome';
import Footer from './components/layout/Footer';
import { SearchCocktails } from './components/SearchCocktails';

const App = () => {
  let content = (
    <Router>
      <AllCocktailsProvider>
        <div className='App'>
          <Route exact path='/' component={Welcome} />
          <Route path={['/home', '/search-cocktails']}>
            <Header />
            <Route exact path='/home' component={Home} />
            <Route exact path='/search-cocktails' component={SearchCocktails} />
            <Footer />
          </Route>
        </div>
      </AllCocktailsProvider>
    </Router>
  );
  return content;
};

export default App;
