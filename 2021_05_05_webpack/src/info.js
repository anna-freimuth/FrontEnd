import {getUserId} from "./localStorageHandler";

const {noActive} = require("./noActive");

const getInfo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then(response => response.json())
        .then(data => {
            renderInfo(data);
        })
}

const infoListener = () => {
    document.querySelector("#userInfo")
        .addEventListener("click", event => {
            event.preventDefault();
            const id = getUserId();
            noActive();
            document.querySelector("#userInfo").classList.add("active");
            getInfo(id);
        })
}

const renderInfo = (data) => {
    const infos = document.querySelector("#content");
    infos.innerHTML = " ";
    let user = data[0];
    let addItem = (key, value) => document.querySelector("#content").innerHTML += `<li>${key}: ${value}</li>`
    addItem("id", user["id"]);
    addItem("name", user["name"]);
    addItem("email", user["email"]);
    addItem("phone", user["phone"]);
    addItem("website", user["website"]);
}
export{infoListener, getInfo}