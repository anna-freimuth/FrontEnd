import React from "react";
import {Switch,Route} from "react-router-dom";
import Drinks from "../components/Drinks"

const Pages = () => {
    return(
        <Switch>
            <Route exact={true} path="/drinks">
                <Drinks />
            </Route>
        </Switch>
    )
}

export default Pages