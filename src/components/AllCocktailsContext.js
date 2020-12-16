import React, { useState, createContext } from 'react';
import { useHttp } from './hooks/http';

export const AllCocktailsContext = createContext();

export const AllCocktailsProvider = (props) => {

    const [allCocktails, setAllCocktails] = useState([]);

    const cocktailsBya = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a', [])[0]['drinks'];
    const cocktailsByb = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b', [])[0]['drinks'];
    const cocktailsByc = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c', [])[0]['drinks'];
    const cocktailsByd = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d', [])[0]['drinks'];
    const cocktailsBye = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e', [])[0]['drinks'];
    const cocktailsByf = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f', [])[0]['drinks'];
    const cocktailsByg = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g', [])[0]['drinks'];
    const cocktailsByh = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=h', [])[0]['drinks'];
    const cocktailsByi = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i', [])[0]['drinks'];
    const cocktailsByj = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=j', [])[0]['drinks'];
    const cocktailsByk = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=k', [])[0]['drinks'];
    const cocktailsByl = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l', [])[0]['drinks'];
    const cocktailsBym = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m', [])[0]['drinks'];
    const cocktailsByn = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=n', [])[0]['drinks'];
    const cocktailsByo = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=o', [])[0]['drinks'];
    const cocktailsByp = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p', [])[0]['drinks'];
    const cocktailsByq = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q', [])[0]['drinks'];
    const cocktailsByr = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=r', [])[0]['drinks'];
    const cocktailsBys = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s', [])[0]['drinks'];
    const cocktailsByt = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t', [])[0]['drinks'];
    const cocktailsByu = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=u', [])[0]['drinks'];
    const cocktailsByv = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v', [])[0]['drinks'];
    const cocktailsByw = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w', [])[0]['drinks'];
    const cocktailsByx = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=x', [])[0]['drinks'];
    const cocktailsByy = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y', [])[0]['drinks'];
    const cocktailsByz = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z', [])[0]['drinks'];
    const cocktailsBy1 = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=1', [])[0]['drinks'];
    const cocktailsBy2 = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=2', [])[0]['drinks'];
    const cocktailsBy3 = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=3', [])[0]['drinks'];
    const cocktailsBy4 = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=4', [])[0]['drinks'];
    const cocktailsBy5 = useHttp('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=5', [])[0]['drinks'];
    
    const objectsByLetter = [cocktailsBya, cocktailsByb, cocktailsByc, cocktailsByd, cocktailsBye, cocktailsByf, cocktailsByg, cocktailsByh, cocktailsByi, cocktailsByj, cocktailsByk, cocktailsByl, cocktailsBym, cocktailsByn, cocktailsByo, cocktailsByp, cocktailsByq, cocktailsByr, cocktailsBys, cocktailsByt, cocktailsByu, cocktailsByv, cocktailsByw, cocktailsByx, cocktailsByy, cocktailsByz, cocktailsBy1, cocktailsBy2, cocktailsBy3, cocktailsBy4, cocktailsBy5];

    const getDrinks = () => {
        let finalObject = [];
        objectsByLetter.filter(object => object !== null)
                        .map(object => object.map(o => finalObject.push(o)));
        return finalObject;
    }

    let getCocktails = () => {
        if (!objectsByLetter.includes(undefined)) {
            let finalObject = getDrinks();
            if (allCocktails.length === 0) {
                setAllCocktails(finalObject);
            } 
        }
    }

    if (allCocktails.length === 0) {
        getCocktails();
    }

    return (
        <AllCocktailsContext.Provider value={[allCocktails, setAllCocktails]}>
            {props.children}
        </AllCocktailsContext.Provider>
    )

}



