
function makeFormat(newTask, task) {
    newTask.classList.add("workTodo")
    let para = document.createElement('p')
    para.innerText = task;

    // console.log("hi");

    newTask.append(para);
    let delIcon = document.createElement("span");
    delIcon.classList.add("material-symbols-outlined");
    delIcon.classList.add("icon");
    delIcon.classList.add("delIcon");
    delIcon.innerText = "delete_forever";
    delIcon.title = "Delete this task";
    newTask.append(delIcon);
    let doneIcon = document.createElement("span");
    doneIcon.classList.add("material-symbols-outlined");
    doneIcon.classList.add("icon");
    doneIcon.classList.add("doAllIcon");
    doneIcon.title = "Completed";
    doneIcon.innerText = "done_all"
    newTask.append(doneIcon);
}

function makeFormatCompletedTask(newTask, task) {
    newTask.classList.add("workTodo")
    let para = document.createElement('p')
    para.innerText = task;

    // console.log("hi");

    newTask.append(para);
    let redoIcon = document.createElement("span");
    redoIcon.innerText = "redo";
    redoIcon.title = "Redo this task";
    redoIcon.classList.add("material-symbols-outlined");
    redoIcon.classList.add("icon");
    redoIcon.classList.add("reDoIcon");
    newTask.appendChild(redoIcon);

}



// let button = document.querySelector("#addButton");
// button.addEventListener("click", function () {
//     let input = document.querySelector("#addItems");
//     let task = input.value;
//     if (task != "") {
//         let newTask = document.createElement("div");
//         makeFormat(newTask, task);
//         document.querySelector("#incomplete").appendChild(newTask);
//         input.value = "";
//     }
// })





let completed = document.querySelector("#incomplete");
completed.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("doAllIcon")) {
        let task = target.previousElementSibling.previousElementSibling.innerText;
        // console.log("clicked");
        // console.log(task);
        let newTask = document.createElement("div");
        makeFormatCompletedTask(newTask, task);
        document.querySelector("#completed").appendChild(newTask);
        newTask.focus();
        newTask.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        target.parentElement.remove();
    }
    if (target.classList.contains("delIcon")) {
        target.parentElement.remove();
    }
});

let redo = document.querySelector("#completed");
redo.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("reDoIcon")) {
        let task = target.previousElementSibling.innerText;
        // console.log("clicked");
        // console.log(task);
        let newTask = document.createElement("div");
        makeFormat(newTask, task);
        document.querySelector("#incomplete").appendChild(newTask);
        newTask.focus();
        newTask.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        target.parentElement.remove();
    }
})


let inputArea = document.querySelector("#addItems");
inputArea.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // let input = document.querySelector("#addItems");
        let task = this.value;
        if (task != "") {
            let newTask = document.createElement("div");
            makeFormat(newTask, task);
            document.querySelector("#incomplete").appendChild(newTask);
            newTask.focus();
            newTask.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            this.value = "";
        }

    }
})

