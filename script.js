
function addTask() {
   
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();
    if (taskText === "") return; 
  
   
    const listItem = document.createElement("li");
    // listItem.innerText = taskText;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
    listItem.querySelector(".task-text").classList.toggle("done", this.checked);
    });

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    taskTextElement.classList.add("task-text");
    
    const deleteIcon = document.createElement("span");
    // deleteIcon.innerHTML = "&#10005;";
    deleteIcon.classList.add("delete-icon");
    deleteIcon.addEventListener("click", function(){
        taskList.removeChild(listItem)
    }
    )

    listItem.appendChild(checkbox);
    listItem.appendChild(taskTextElement);
    listItem.appendChild(deleteIcon);
    taskList.appendChild(listItem);
    taskInput.value = "";

}

document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});



