import {noActive} from "./noActive";
import {getUserId} from "./localStorageHandler";

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
            const id = getUserId();
            noActive();
            document.querySelector("#albums").classList.add("active");
            getAlbums(id);
        })
}

export {albumsListener}