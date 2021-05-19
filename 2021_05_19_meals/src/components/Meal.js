import React from "react";

const Meal=({meal})=>{
    return(
        <div className="col-md-3 col-sm-4 col-6 mt-3">
            <div className="card">
                <img src={meal.strMealThumb} alt="meal"/>
                <div className="card-body">
                    <h4 className="card-title">
                        {meal.strMeal}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Meal