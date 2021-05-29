import React, {useContext} from 'react'
import {categoryDrinkContext} from "./DrinkApp";

const DrinkCategory = ({category}) => {
    const context = useContext(categoryDrinkContext);
    return (
        <div className="col-6 col-sm-4 col-md-3">
            <button
                type="button"
                onClick={
                    () => {
                        context.changeCategory(category.strCategory)
                    }
                }
                className="btn btn-outline-success my-1 w-100"
            >{category.strCategory}</button>
        </div>
    )
}

export default DrinkCategory
