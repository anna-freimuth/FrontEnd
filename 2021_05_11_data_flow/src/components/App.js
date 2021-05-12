import React, {useState} from "react";
import PostList from "./PostList";

const getPostsList = () => {
    return [
        {
            id: 1, author: "Mika List", title: "lorem",
            announcement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            likes: 0, dislikes: 0, rating: 0
        },
        {
            id: 2, author: "Rami Steve", title: "sed do eiusmod",
            announcement: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. ",
            likes: 0, dislikes: 0, rating: 0
        },
        {
            id: 3, author: "Raul Kris", title: "enim ad minim veniam",
            announcement: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
            likes: 0, dislikes: 0, rating: 0
        },
        {
            id: 4, author: "Laura Trina", title: "repellat",
            announcement: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            likes: 0, dislikes: 0, rating: 0
        },
    ]
}

export default () => {
    const [posts, setPosts] = useState(getPostsList())

    const likesHandle = (id) => {
        changeRating(id, 1)
        likeRating(id)

    }
    const dislikesHandle = (id) => {
        changeRating(id, -1)
        dislikeRating(id)
    }

    const likeRating = (id)=>{
        const arr = [...posts]
        const index = arr.findIndex(post => post.id === id)
        if (index !== -1) {
            let like = 1;
            arr[index].likes += like;
        }
        setPosts(arr)
    }
    const dislikeRating = (id)=>{
        const arr = [...posts]
        const index = arr.findIndex(post => post.id === id)
        if (index !== -1) {
            let dislike = 1;
            arr[index].dislikes += dislike;
        }
        setPosts(arr)
    }

    const changeRating = (id, like) => {
        const arr = [...posts]
        const index = arr.findIndex(post => post.id === id)
        if (index !== -1) {
            arr[index].rating += like
        }
        setPosts(arr)
    }

    return (
        <div>
            <PostList
                posts={posts}
                likesHandle={likesHandle}
                dislikesHandle={dislikesHandle}
                />
        </div>
    )
}
