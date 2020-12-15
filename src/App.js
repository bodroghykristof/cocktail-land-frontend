import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AllCocktailsProvider } from './components/AllCocktailsContext';
import { Home } from './components/Home';
import Welcome from './components/Welcome';
import { SearchCocktails } from './components/SearchCocktails';

const App = () => {
  let content = (
    <Router>
      <AllCocktailsProvider>
        <div className='App'>
          <Header />
          <Route exact path='/' component={Welcome} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/search-cocktails' component={SearchCocktails} />
        </div>
      </AllCocktailsProvider>
    </Router>
  );
  return content;
};

export default App;
