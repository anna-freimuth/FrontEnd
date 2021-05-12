import React from "react";
import LikesRating from "./LikesRating";

export default ({id, author, title, announcement, rating, likesHandle, dislikesHandle,dislikes,likes}) => {
    return (
        <div>
            <h2>{author}</h2>
            <h3>{title}</h3>
            <h3>{announcement}</h3>
            <LikesRating
                id={id}
                rating={rating}
                dislikes={dislikes}
                likes={likes}
                likesHandle={likesHandle}
                dislikesHandle={dislikesHandle}
            />
        </div>
    )
}