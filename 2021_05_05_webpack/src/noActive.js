const noActive = () => {
    const linkItems = document.querySelectorAll(".nav-link");
    for (let item of linkItems) {
        item.classList.remove("active");
    }
}

export {noActive}
