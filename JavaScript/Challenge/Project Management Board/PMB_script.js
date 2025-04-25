// Load existing data from localStorage
window.onload = function () {
    const storedGroups = JSON.parse(localStorage.getItem("projectGroups")) || [
      { name: "To Do", tasks: [] },
      { name: "Ongoing", tasks: [] },
      { name: "Completed", tasks: [] },
    ];
    storedGroups.forEach((group) => {
      const board = document.querySelector(
        `.boardlist[data-group-name="${group.name}"]`
      );
      if (board) {
        group.tasks.forEach((task) => {
          createTaskElement(board, task);
        });
      }
    });
  
    // Add event listeners to the initial "Add Task" buttons
    const addTaskButtons = document.querySelectorAll(".boardlist > button");
    addTaskButtons.forEach((button) => {
      button.addEventListener("click", function () {
        addTask(this.parentNode); // Pass the parent boardlist div
      });
    });
  };
  
  function addGroup() {
    const sectionName = prompt("Enter new group name:");
    if (sectionName) {
      const boardsContainer = document.querySelector(".boards");
      const newBoard = document.createElement("div");
      newBoard.className = "boardlist";
      newBoard.dataset.groupName = sectionName;
      newBoard.innerHTML = `
        <h2 class="title">${sectionName}</h2>
        <button>Add Task</button>
      `;
      boardsContainer.insertBefore(newBoard, document.querySelector(".add_group"));
  
      // Add event listener to the new "Add Task" button
      newBoard.querySelector("button").addEventListener("click", function () {
        addTask(this.parentNode);
      });
  
      // Update localStorage
      const storedGroups = JSON.parse(localStorage.getItem("projectGroups")) || [];
      storedGroups.push({ name: sectionName, tasks: [] });
      localStorage.setItem("projectGroups", JSON.stringify(storedGroups));
    }
  }
  
  function addTask(board) {
    const taskText = prompt("Enter task:");
    if (taskText) {
      const groupName = board.dataset.groupName;
      createTaskElement(board, taskText);
  
      // Update localStorage
      const storedGroups = JSON.parse(localStorage.getItem("projectGroups")) || [];
      const groupIndex = storedGroups.findIndex(
        (group) => group.name === groupName
      );
      if (groupIndex !== -1) {
        storedGroups[groupIndex].tasks.push(taskText);
        localStorage.setItem("projectGroups", JSON.stringify(storedGroups));
      }
    }
  }
  
  function createTaskElement(board, taskText) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerText = taskText;
    board.appendChild(taskDiv);
  }