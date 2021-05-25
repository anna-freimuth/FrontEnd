import React, {Component} from "react";
import {URL} from "../data";
import Ingredient from "./Ingredient";
import Loading from "./Loading";

export default class Ingredients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            error: false
        }
    }

    renderIngredients = () => {
        if (!this.state.ingredients && !this.error) return (<Loading/>);
        const ingredients = [...this.state.ingredients];
        return ingredients.map(ingredient => <Ingredient key={ingredient.strIngredient1} ingredient={ingredient}/>)
    }

    componentDidMount() {
        fetch(`${URL}/list.php?i=list`)
            .then(response => response.json())
            .then(data => this.setState({isLoading: false, ingredients: data.drinks}))
            .catch(error => {
                this.setState({...this.state, error: error.message})
            })
    }

    render() {
        return (
            <section className="container">
                {this.renderIngredients()}
            </section>

        )
    }

}
