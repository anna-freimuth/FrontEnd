import React, {Fragment, useState} from "react";
import DrinksCategories from "../drinks/DrinksCategories";
import Drinks from "./Drinks";

export const categoryDrinkContext = React.createContext();

const DrinkApp = () => {

    const [category, setCategory] = useState(null)

    const changeCategory = (data) => {
        setCategory(data)
    }

    const renderDrinks = () => {
        if (category) {
            return (
                <section className="container">
                    <Drinks category={category}/>
                </section>)
        }
    }

    return (
        <Fragment>
            <categoryDrinkContext.Provider value={{changeCategory}}>
                <section className="container my-5">
                    <DrinksCategories/>
                </section>
            </categoryDrinkContext.Provider>
            {renderDrinks()}
        </Fragment>
    )

}

export default DrinkApp