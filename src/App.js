import './App.css';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AllCocktailsProvider } from './components/AllCocktailsContext';
import { Home } from './components/Home';
import { SearchCocktails } from './components/SearchCocktails';

const App = () => {
  let content = (
    <Router>
      <AllCocktailsProvider>
        <div className='App'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/search-cocktails' component={SearchCocktails} />
        </div>
      </AllCocktailsProvider>
    </Router>
  );
  return content;
};

export default App;
