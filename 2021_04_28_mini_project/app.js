fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        renderUsers(data);
        usersListener();
        todoListener();
        postsListener();
        albumsListener();
        infoListener();
    })

let userId = 0;

const renderUsers = (userList) => {
    userList.forEach(user => {
        document
            .querySelector("#userList")
            .innerHTML += `<button id="user_${user.id}">${user.name}</button>`;
    })
}

const usersListener = () => {
    const list = document.querySelectorAll("#userList");
    for (let item of list) {
        item.addEventListener("click", event => {
            event.preventDefault();
            const [, id] = event.target.id.split('_');
            userId = id;
            getInfo(id);
            noActive();
            document.querySelector("#userInfo").classList.add("active");
        })
    }
}

const todoListener = () => {
    document.querySelector("#todo")
        .addEventListener("click", event => {
            event.preventDefault();
            const id = userId;
            noActive();
            document.querySelector("#todo").classList.add("active");
            getTodo(id);
        })
}

const getInfo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then(response => response.json())
        .then(data => {
            renderInfo(data);
        })
}

const renderInfo = (data) => {
    const infos = document.querySelector("#content");
    infos.innerHTML = " ";
    user = data[0];
    addItem = (key, value) => document.querySelector("#content").innerHTML += `<li>${key}: ${value}</li>`
    addItem("id", user["id"]);
    addItem("name", user["name"]);
    addItem("email", user["email"]);
    addItem("phone", user["phone"]);
    addItem("website", user["website"]);
}

const getTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        .then(response => response.json())
        .then(data => {
            renderTodo(data);
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
            const id = userId;
            noActive();
            document.querySelector("#posts").classList.add("active");
            getPosts(id);
        })
}

const getAlbums = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(response => response.json())
        .then(data => {
            renderAlbums(data);
        })
}

const renderAlbums = (contentAlbums) => {
    const albums = document.querySelector("#content");
    albums.innerHTML = "";
    contentAlbums.forEach(albums => {
        document
            .querySelector("#content")
            .innerHTML += `<li id="userId_${albums.id}">${albums.title}</li>`;
    })
}

const albumsListener = () => {
    document.querySelector("#albums")
        .addEventListener("click", event => {
            event.preventDefault();
            const id = userId;
            noActive();
            document.querySelector("#albums").classList.add("active");
            getAlbums(id);
        })
}

const infoListener = () => {
    document.querySelector("#userInfo")
        .addEventListener("click", event => {
            event.preventDefault();
            const id = userId;
            noActive();
            document.querySelector("#userInfo").classList.add("active");
            getInfo(id);
        })
}

const noActive = () => {

    const linkItems = document.querySelectorAll(".nav-link");
    for (item of linkItems) {

        item.classList.remove("active");
    }

}
