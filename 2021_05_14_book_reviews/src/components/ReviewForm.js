import React, {useContext, useState} from "react";
import {MyContextFunction} from "./App";


const ReviewForm=({addReview}) =>{

    const emptyReview = {
        text: "",
        sender: "",
        rate: 1,
    }
    const [review, setReview] = useState(emptyReview)

    const handleChangeName = event => {
        setReview({...review, sender: event.target.value});
    }
    const handleChangeText = event => {
        setReview({...review, text: event.target.value});
    }
    const handleChangeRate = event => {
        setReview({...review, rate: Math.min(5, (Math.max(1, parseInt(event.target.value))))});
    }

    const handleAdd = () => {
        addReview(review);
        setReview(emptyReview);

    }

    let text;
    let sender;
    let rate;
    return (<div>
            <input type="text" placeholder="text" onChange={handleChangeText} value={review.text} />
            <input type="text" placeholder="name" id="sender" onChange={handleChangeName} value={review.sender}/>
            <input type="number"  id="rate" name="rate" min="1" max="5"
                   onChange={handleChangeRate} value={review.rate}  />
            <button type="button" onClick={handleAdd}>Send review</button>

            <p>{text}</p>
            <p>{sender}</p>
            <p>{rate}</p>
        </div>
    )
}
export default ReviewForm