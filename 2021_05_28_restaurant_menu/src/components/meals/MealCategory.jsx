import React, {useContext} from 'react'
import {categoryContext} from "./MealApp";

const MealCategory = ({category}) => {
    const context = useContext(categoryContext);
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

export default MealCategory
