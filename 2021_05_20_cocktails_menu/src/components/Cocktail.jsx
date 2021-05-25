const Cocktail = ({cocktail}) => {

    return (
        <div className="col-md-3 col-sm-4 col-6 mb-2">
            <div className="card">
                <img src={cocktail.strDrinkThumb} alt="image of cocktail"/>
                <div className="card-body">
                    <h5 className="card-title">
                        {cocktail.strDrink}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Cocktail