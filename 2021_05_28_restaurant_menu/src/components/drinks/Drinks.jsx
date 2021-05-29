import React, {useEffect, useState} from "react";
import {UrlDrinks} from "../../data";
import Drink from "./Drink";
import Loading from "../Loading";

const Drinks = ({category}) => {
    const [drinks, setDrinks] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const renderDrinks = () => {
        if (isLoading) return (<Loading/>);
        return drinks.map(drink => (<Drink key={drink.strDrink} drink={drink}/>))
    }

    useEffect(() => {
        fetch(`${UrlDrinks}filter.php?c=${category}`)
            .then(response => response.json())
            .then(data => setDrinks(data.drinks))
            .then(() => setIsLoading(false))

            .catch(error => {
                setError(error.message)
                setIsLoading(false)
            })
    }, [category]);

    return (
        <div className="container">
            <div className="row">
                {renderDrinks()}
            </div>
        </div>
    )
}
export default Drinks
