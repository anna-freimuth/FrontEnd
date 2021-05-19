import React, {Component} from "react";
import Meal from "./Meal";
import Loading from "./Loading";
import Error from "./Error";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: null,
            isLoading: true,
            error:null
        }
    }

    renderMeals() {
        if (this.state.isLoading && !this.state.error) {
            return (<Loading />)
        }else if(this.state.error){
                return(<Error />)
        }
        return (
            <div>
            <h1>Canadian food</h1>
                <div className="row">
                {this.state.meals.map((meal)=>(<Meal key={meal.idMeal} meal={meal}/>))}
                </div>
            </div>
        )

    }

    componentDidMount() {
        setTimeout(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
            .then(response => response.json())
            .then(data => this.setState({isLoading: false, meals: data.meals}))
            .catch(error=>{this.setState({...this.state,error: error.message});
            })
        },2000)
    }

    render() {
        return (
            <section className="container">
                    {this.renderMeals()}
            </section>
        )
    }
}

export default App