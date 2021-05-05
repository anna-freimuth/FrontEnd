import {noActive} from "./noActive";
import {getInfo} from "./info";
import {saveUserId} from "./localStorageHandler";

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
            saveUserId(id);
            getInfo(id);
            noActive();
            document.querySelector("#userInfo").classList.add("active");
        })
    }
}

export{renderUsers,usersListener}