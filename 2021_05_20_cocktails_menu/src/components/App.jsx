import React, {Component, Fragment} from "react";
import Cocktails from "./Cocktails";
import Ingredients from "./Ingredients";

export const IngredientContext = React.createContext();

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredient: null
        }
    }

    changeIngredient = (data) => {
        this.setState({ingredient: data})
    }

    renderCocktails() {
        return (
            <div>
                <h1>Choose cocktail via ingredient</h1>
                <section className="container">
                    <Cocktails ingredient={this.state.ingredient}/>
                </section>
            </div>
        )
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-4">
                        <IngredientContext.Provider value={{changeIngredient: this.changeIngredient}}>
                            <section className="container">
                                <Ingredients/>
                            </section>
                        </IngredientContext.Provider>
                    </div>
                    <div className="col">
                        {this.renderCocktails()}
                    </div>
                </div>
            </Fragment>
        )
    }
}
