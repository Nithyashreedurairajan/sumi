function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");

        // Create new list item
        var li = document.createElement("li");
        li.textContent = taskText;

        // Create delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            li.remove();
        };

        // Append delete button to list item
        li.appendChild(deleteBtn);

        // Append list item to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }
}

