import React, {Fragment} from "react";

import Navigation from "./Navigation";
import Pages from "../layouts/Pages";

const App = () =>{


    return(
        <Fragment>
            <div>
                <Navigation/>
            </div>
       <div>
        <Pages />
       </div>
        </Fragment>
    )

}

export default App