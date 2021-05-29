import React, {useEffect, useState} from "react"
import Loading from "../Loading";
import {UrlDrinks} from "../../data";
import DrinkCategory from "./DrinkCategory";

const DrinksCategories = () => {

    const [categories, setCategories] = useState(null)
    const [error, setError] = useState(false)

    const renderDrinksCategories = () => {
        if (!categories) return (<Loading/>);
        return categories.map(category => (<DrinkCategory key={category.strCategory} category={category}/>))
    }

    useEffect(() => {
        fetch(`${UrlDrinks}list.php?c=list`)
            .then(response => response.json())
            .then(data => {
                setCategories(data.drinks)
            })
            .catch(error => {
                setError(error.message)
            })
    }, []);


    return (
        <div className="row">
            {renderDrinksCategories()}
        </div>
    )
}

export default DrinksCategories
