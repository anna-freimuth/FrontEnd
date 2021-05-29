import React from "react";
import {Route, Switch} from "react-router-dom";
import MealApp from "../components/meals/MealApp";
import DrinkApp from "../components/drinks/DrinkApp";
import Home from "../components/home/Home";

const Pages = () => {
    return (
        <Switch>
            <Route exact={true} path="/">
                <Home/>
            </Route>
            <Route exact={true} path="/drinks">
                <DrinkApp/>
            </Route>
            <Route exact={true} path="/meals">
                <MealApp/>
            </Route>
        </Switch>
    )
}


export default Pages
