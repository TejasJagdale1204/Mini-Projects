let inp = document.querySelector("input");
let btn = document.querySelector("button");
let uol = document.querySelector("ul");

btn.addEventListener("click", function() {

    if (inp.value.trim() === "") {
        return alert("Enter the task to add");
    } 

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    uol.appendChild(item);
    uol.scrollTop = uol.scrollHeight;
    inp.value="";
});

inp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        btn.click();   // same as clicking Add Task
    }
});

uol.addEventListener("click", function(event) {
    if(event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});