import React, {useContext} from "react";
import {MyContextFunction} from "./App";


export default ()=>{
    const context = useContext(MyContextFunction)
    return(
        <div>
            <h3>Book: "Consectetur adipiscing "</h3>
            <h4>Author: Kris Lan</h4>
            <h5>Year: 1995</h5>
            <button>
                    Average review score:{context.averageReviewScore()}  </button>
        </div>
    )
}