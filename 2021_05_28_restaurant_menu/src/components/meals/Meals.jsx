import React, {useEffect, useState} from 'react'
import Loading from "../Loading"
import Meal from "./Meal"
import {UrlMeals} from "../../data";

const Meals = ({category}) => {

    const [meals, setMeals] = useState([])
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    const renderMeals = () => {
        if (isLoading) return (<Loading/>);
        return meals.map(meal => (<Meal key={meal.strMeal} meal={meal}/>))
    }

    useEffect(() => {
        fetch(`${UrlMeals}filter.php?c=${category}`)
            .then(response => response.json())
            .then(data => setMeals(data.meals))
            .then(() => setIsLoading(false))

            .catch(error => {
                setError(error.message)
                setIsLoading(false)
            })
    }, [category]);

    return (
        <div className="container">
            <div className="row">
                {renderMeals()}
            </div>
        </div>
    )
}

export default Meals
