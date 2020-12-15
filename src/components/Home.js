import React, { useContext } from 'react'; 
import { useHttp } from './hooks/http';
import { AllCocktailsContext } from './AllCocktailsContext';

export const Home = () => {

    const [allCocktails,setAllCocktails] = useContext(AllCocktailsContext);

    const cocktailsByFirstLetter = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a', []);
    

    if ((allCocktails.length === 0) && (cocktailsByFirstLetter[0]['drinks'] !== undefined)) {
        let array = cocktailsByFirstLetter[0]['drinks'];
        console.log("array: ", array);
        setAllCocktails(array);
    } 

    console.log("allcocktails: ", allCocktails)
    return (
        <React.Fragment>
            <h1>Cocktails in your Life</h1>
            <p>F***ck yeah</p>
        </React.Fragment>
    )
}