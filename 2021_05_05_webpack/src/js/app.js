import {renderUsers, usersListener} from "./users";
import {todoListener} from "./todo";
import {postsListener} from "./posts";
import {albumsListener} from "./albums";
import {infoListener} from "./info";

const getUsers = () => {
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

}


getUsers();