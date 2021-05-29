import React, {Fragment, useState} from "react";
import MealsCategories from "./MealsCategories";
import Meals from "./Meals";

export const categoryContext = React.createContext();

const MealApp = () => {

    const [category, setCategory] = useState(null)

    const changeCategory = (data) => {
        setCategory(data)
    }

    const renderMeals = () => {
        if (category) {
            return (
                <section className="container">
                    <Meals category={category}/>
                </section>)
        }
    }

    return (
        <Fragment>
            <categoryContext.Provider value={{changeCategory}}>
                <section className="container my-5">
                    <MealsCategories/>
                </section>
            </categoryContext.Provider>
            {renderMeals()}
        </Fragment>
    )

}

export default MealApp
