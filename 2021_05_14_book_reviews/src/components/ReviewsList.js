import React from "react";
import Review from "./Review";

export default ({reviews}) => {
    return (
        <ul>
            {reviews.map(review => (
                <li key={review.id}>
                    <Review
                        id={review.id}
                        sender={review.sender}
                        text={review.text}
                        rate={review.rate}
                    />
                </li>
            ))}
        </ul>
    )
}