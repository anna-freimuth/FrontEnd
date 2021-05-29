import React, {useEffect, useState} from "react"
import Loading from "../Loading";
import {UrlMeals} from "../../data";
import MealCategory from "./MealCategory";

const MealCategories = () => {

    const [categories, setCategories] = useState(null)
    const [error, setError] = useState(false)

    const renderMealCategories = () => {
        if (!categories) return (<Loading/>);
        return categories.map(category => (<MealCategory key={category.strCategory} category={category}/>))
    }

    useEffect(() => {
        fetch(`${UrlMeals}categories.php`)
            .then(response => response.json())
            .then(data => {
                setCategories(data.categories)
            })
            .catch(error => {
                setError(error.message)
            })
    }, []);


    return (
        <div className="row">
            {renderMealCategories()}
        </div>
    )
}

export default MealCategories
