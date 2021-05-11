import React from  "react";

export default({id, rating, likesHandle, dislikesHandle,dislikes,likes})=>{
    return(
        <div>
            <button id="like" onClick={()=>likesHandle(id)}>like {likes}</button>
            <button id="rating">rating {rating}</button>
            <button id="dislike" onClick={()=>dislikesHandle(id)}>dislikes {dislikes}</button>
        </div>
    )
}
