import React, {Component} from "react";
import {URL} from "../data"
import Loading from "./Loading";
import Error from "./Error";
import Cocktail from "./Cocktail";


export default class Cocktails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            drinks: [],
            error: false
        }
    }

    getData = (ingredient) => {
        fetch(`${URL}/filter.php?i=${ingredient}`)
            .then(response => response.json())
            .then(data => {
                this.setState({isLoading: false, drinks: data.drinks})
            })
            .catch(error => this.setState({...this.state, error: error.message, isLoading: false}))
    }


    renderCocktails = () => {
        if (this.isLoading && !this.error) return <div>

            <Loading/>
        </div>
        if (this.error) return <div>
            <Error/>
        </div>
        else
            return (
                (this.state.drinks.map((cocktail) => (<Cocktail key={cocktail.idDrink} cocktail={cocktail}/>)))
            )
    }

    componentDidMount() {
        this.getData(this.props.ingredient)
    }

    componentDidUpdate(prevProps) {

        if (prevProps.ingredient !== this.props.ingredient) {

            this.getData(this.props.ingredient)
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderCocktails()}
                </div>
            </div>
        )
    }
}
