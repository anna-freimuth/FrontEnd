import React, {useState} from "react";


import ReviewsList from "./ReviewsList";
import ReviewForm from "./ReviewForm";
import ReviewRating from "./ReviewRating";


const getReviewsList = () => {
    return [
        {
            id: 1,
            sender: "Nikas",
            text: "Lorem ipsum dolor sit amet," +
                " consectetur adipiscing elit, sed do eiusmod tempor incididunt" +
                " ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            rate: 1
        }
    ]
}


export const MyContextFunction = React.createContext({})

export default () => {

    const [reviews, setReviews] = useState(getReviewsList())

    const averageReviewScore = () => {

        const reviewsAmount = reviews.length
        if (reviewsAmount === 0) return 0;

        return Math.round(reviews.reduce((current, next) => current + next.rate, 0) / reviewsAmount);
    }

    const addReview = (review) => {
        const reviewList = [...reviews];
        reviewList.push(review);
        setReviews(reviewList)
    }

    return (
        <div>
            <MyContextFunction.Provider value={{
                averageReviewScore
            }}>
                <ReviewRating/>
                <ReviewForm
                    addReview={addReview}
                />

                <ReviewsList
                    reviews={reviews}
                />
            </MyContextFunction.Provider>
        </div>
    )
}
