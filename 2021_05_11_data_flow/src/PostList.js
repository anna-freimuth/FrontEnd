import React from "react";
import Post from "./Post";

export default({posts, likesHandle,dislikesHandle,dislikesRating})=>{
    return(
        <ul>
            {posts.map(post=>(
                <li key ={post.id}>
                    <Post
                        id={post.id}
                        author={post.author}
                        title={post.title}
                        announcement={post.announcement}
                        rating={post.rating}
                        dislikesRating={dislikesRating}
                        likes={post.likes}
                        dislikes={post.dislikes}
                        likesHandle={likesHandle}
                        dislikesHandle={dislikesHandle}
                        />
                </li>
            ))}
        </ul>
    )
}
