document.querySelector("#simba").addEventListener("click", () => {
    createLists();
});

document.querySelector("#return").addEventListener("click", () => {
    returnBack();
});

function createLists() {
    const div1 = document.querySelector("#dogs");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    ul.appendChild(li);
    div1.appendChild(ul);
    li.textContent = "hello world";
}

function returnBack() {
    window.location.href = "index.html";
}
