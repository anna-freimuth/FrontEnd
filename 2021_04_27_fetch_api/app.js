const renderUsers = (userList) => {
    userList.forEach(user => {
        document
            .querySelector("#userList")
            .innerHTML += `<li id="user_${user.id}">${user.name}</li>`;
    })
}

const usersListener = () => {
    const list = document.querySelectorAll("#userList li");
    for (let item of list) {
        item.addEventListener("click", event => {
            event.preventDefault();
            const [, id] = event.target.id.split('_');
            getAlbums(id);
        })
    }
}


const getAlbums = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(response => response.json())
        .then(data => {
            renderAlbums(data);
            albumsListener();
        })
}

const renderAlbums = (userAlbums) => {
    const albums = document.querySelector("#userAlbums");
    albums.innerHTML = " ";
    userAlbums.forEach(album => {
        document
            .querySelector("#userAlbums")
            .innerHTML += `<li id="albumId_${album.id}">${album.title}</li>`;
    })

}

const albumsListener = () => {
    const list = document.querySelectorAll("#userAlbums li");
    for (let item of list) {
        item.addEventListener("click", event => {
            event.preventDefault();
            const [, id] = event.target.id.split('_');
            getPhotos(id);
        })
    }
}

const getPhotos = (albumId) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => response.json())
        .then(data => renderPhotos(data))
}

const renderPhotos = (userPhotos) => {
    const photos = document.querySelector("#userPhotos");
    photos.innerHTML = " ";
    userPhotos.forEach(photo => {
        document
            .querySelector("#userPhotos")
            .innerHTML += `<li>${photo.title}</li>`;
    })
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        renderUsers(data);
        usersListener();
    })
