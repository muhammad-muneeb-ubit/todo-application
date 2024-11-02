let todo = [];

function createLi() {
    const list = document.getElementById("todoList");
    list.innerHTML = ""; 

    todo.forEach((task) => {
        let li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    });
}

function addAtEnd() {
    const todoItem = document.getElementById("todoInput").value;
    if (todoItem) {
        todo.push(todoItem);
        document.getElementById("todoInput").value = ""; 
        createLi();
    } else {
        alert("Please enter a task!");
    }
}

function addAtStart() {
    const todoItem = document.getElementById("todoInput").value;
    if (todoItem) {
        todo.unshift(todoItem);
        document.getElementById("todoInput").value = ""; 
        createLi();
    } else {
        alert("Please enter a task!");
    }
}

function removeFromEnd() {
    if (todo.length > 0) {
        todo.pop();
        createLi();
    } else {
        alert("No tasks to remove!");
    }
}

function removeFromStart() {
    if (todo.length > 0) {
        todo.shift();
        createLi();
    } else {
        alert("No tasks to remove!");
    }
}
