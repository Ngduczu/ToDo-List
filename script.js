const newTaskInput = document.getElementById("new-task");
const todoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list"); // sửa chỗ này

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }
    const li = createTaskItems(taskText, false);
    todoList.appendChild(li);
    newTaskInput.value = "";
}

function createTaskItems(text, isComplete) {
    const li = document.createElement("li");
    li.className = "task-item";

    const p = document.createElement("p");
    p.innerText = text;

    const button = document.createElement("button");
    const button2 = document.createElement("button");
    button.className = "btn btn-sm btn-outline-light ml-2";
    button2.className = "btn btn-sm btn-outline-light ml-2";
    button.id = "checkbox";
    button2.id = "deletebox";

    if (!isComplete) {
        button.innerHTML = `<i class="fa fa-check"></i>`;
        button.title = "Đánh dấu hoàn thành";
        button.onclick = () => completeTask(li);
        button2.innerHTML = `<i class="fa fa-trash"></i>`;
        button2.title = "Xóa task";
        button2.onclick = () => li.remove();
    } else {
        button.innerHTML = `<i class="fa fa-undo"></i>`;
        button.title = "Làm lại task";
        button.onclick = () => uncompleteTask(li);
        button2.innerHTML = `<i class="fa fa-trash"></i>`;
        button2.title = "Xóa task";
        button2.onclick = () => li.remove();
    }

    li.appendChild(p);
    li.appendChild(button);
    li.appendChild(button2);
    return li;
}

function completeTask(taskElement) {
    const text = taskElement.querySelector("p").innerText;
    const completedItem = createTaskItems(text, true);
    completedList.appendChild(completedItem);
    taskElement.remove();
}
function uncompleteTask(taskElement) {
    const text = taskElement.querySelector("p").innerText;
    const todoItem = createTaskItems(text, false); // false vì đưa lại về danh sách TO DO
    todoList.appendChild(todoItem);
    taskElement.remove();
}

newTaskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
