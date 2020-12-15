import React, { useContext } from 'react'; 
import { AllCocktailsContext } from './AllCocktailsContext';

export const Home = () => {

    const [allCocktails] = useContext(AllCocktailsContext);
    
    return (
        <React.Fragment>
            <h1>Cocktails in your Life</h1>
            <p>F***ck yeah</p>
            <h3>{ allCocktails.length }</h3>
        </React.Fragment>
    )
}