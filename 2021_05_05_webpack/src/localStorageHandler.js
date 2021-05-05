const saveUserId = id => {
    localStorage.setItem("userId", id);
}

const getUserId = () => {
    return localStorage.getItem("userId")
}

export {saveUserId, getUserId}