import React, {useEffect, useState} from "react";
import {UrlDrinks} from "../data";
import Drink from "./Drink";
import Loading from "./Loading";

const Drinks = () => {
    const [drinks, setDrinks] = useState(null)
    const [error, setError] = useState(false)

    const renderDrinks = () => {
        if (!drinks) return (<Loading/>);
        return drinks.map(drink => (<Drink key={drink.strDrink} drink={drink}/>))
    }

    useEffect(() => {
        fetch(`${UrlDrinks}search.php?f=b`)
            .then(response => response.json())
            .then(data => setDrinks(data.drinks))

            .catch(error => {
                setError(error.message)
            })
    }, []);

    return(
        <div className="container">
        <div className="row">
            {renderDrinks()}
        </div>
        </div>
    )
}
export default Drinks