import {noActive} from "./noActive";
import {getUserId} from "./localStorageHandler";

const getTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then(response => response.json())
        .then(data => {
            renderTodo(data);
        })
}

const todoListener = () => {
    document.querySelector("#todo")
        .addEventListener("click", event => {
            event.preventDefault();
            const id = getUserId();
            noActive();
            document.querySelector("#todo").classList.add("active");
            getTodo(id);
        })
}

const renderTodo = (contentTodo) => {
    const todo = document.querySelector("#content");
    todo.innerHTML = "";
    contentTodo.forEach(todos => {
        document
            .querySelector("#content")
            .innerHTML += `<li id="userId_${todos.id}">${todos.title}</li>`;
    })
}

export{todoListener}