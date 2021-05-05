import {noActive} from "./noActive";
import {getUserId} from "./localStorageHandler";

const getPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(data => {
            renderPosts(data);
        })
}

const renderPosts = (contentPosts) => {
    const posts = document.querySelector("#content");
    posts.innerHTML = "";
    contentPosts.forEach(posts => {
        document
            .querySelector("#content")
            .innerHTML += `<li id="userId_${posts.id}">${posts.title}</li>`;
    })
}

const postsListener = () => {
    document.querySelector("#posts")
        .addEventListener("click", event => {
            event.preventDefault();
            const id = getUserId();
            noActive();
            document.querySelector("#posts").classList.add("active");
            getPosts(id);
        })
}

export {postsListener}