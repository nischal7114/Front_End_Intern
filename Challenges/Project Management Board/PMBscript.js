// // Key for localStorage
// const STORAGE_KEY = "pmb_board_data";

// // Default groups
// const DEFAULT_GROUPS = [
//     { name: "To Do", tasks: [] },
//     { name: "Pending", tasks: [] },
//     { name: "Staging", tasks: [] }
// ];

// // Utility: Save state to localStorage
// function saveBoardState(groups) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
// }

// // Utility: Load state from localStorage or set defaults
// function loadBoardState() {
//     let data = localStorage.getItem(STORAGE_KEY);
//     if (data) {
//         return JSON.parse(data);
//     } else {
//         saveBoardState(DEFAULT_GROUPS);
//         return JSON.parse(JSON.stringify(DEFAULT_GROUPS));
//     }
// }

// // Utility: Render all groups and tasks
// function renderBoard() {
//     const groups = loadBoardState();
//     const boardsDiv = document.querySelector(".boards");
//     boardsDiv.innerHTML = ""; // Clear current

//     groups.forEach(group => {
//         const board = document.createElement("div");
//         board.className = "boardlist";
//         board.setAttribute("data-id", group.name);

//         // Title & Remove button (not for default groups)
//         const titleDiv = document.createElement("div");
//         titleDiv.className = "list_title";
//         titleDiv.innerHTML = `<h2>${group.name}</h2>`;
//         if (!DEFAULT_GROUPS.some(def => def.name === group.name)) {
//             const removeBtn = document.createElement("button");
//             removeBtn.textContent = "🗑️";
//             removeBtn.title = "Remove Group";
//             removeBtn.style.marginLeft = "10px";
//             removeBtn.onclick = () => removeGroup(group.name);
//             titleDiv.appendChild(removeBtn);
//         }
//         board.appendChild(titleDiv);

//         // Tasks
//         group.tasks.forEach(task => {
//             board.appendChild(createTaskElement(task, group.name));
//         });

//         // Add Task button
//         const taskBtnDiv = document.createElement("div");
//         taskBtnDiv.className = "task_button";
//         const addTaskBtn = document.createElement("button");
//         addTaskBtn.className = "add";
//         addTaskBtn.textContent = "Add Task";
//         addTaskBtn.onclick = () => addTask(group.name);
//         taskBtnDiv.appendChild(addTaskBtn);
//         board.appendChild(taskBtnDiv);

//         boardsDiv.appendChild(board);
//     });
// }

// // Utility: Create a task DOM element with delete button
// function createTaskElement(taskText, groupName) {
//     const taskDiv = document.createElement("div");
//     taskDiv.className = "task";
//     taskDiv.textContent = taskText;

//     const delBtn = document.createElement("button");
//     delBtn.textContent = "🗑️";
//     delBtn.title = "Delete Task";
//     delBtn.style.marginLeft = "10px";
//     delBtn.onclick = (e) => {
//         e.stopPropagation();
//         removeTask(groupName, taskText);
//     };
//     taskDiv.appendChild(delBtn);

//     return taskDiv;
// }

// // Add Task logic
// function addTask(groupName) {
//     const task = prompt("Enter task:");
//     if (task && task.trim()) {
//         const groups = loadBoardState();
//         const group = groups.find(g => g.name === groupName);
//         if (group) {
//             group.tasks.push(task.trim());
//             saveBoardState(groups);
//             renderBoard();
//         }
//     }
// }

// // Remove Task logic
// function removeTask(groupName, taskText) {
//     const groups = loadBoardState();
//     const group = groups.find(g => g.name === groupName);
//     if (group) {
//         group.tasks = group.tasks.filter(t => t !== taskText);
//         saveBoardState(groups);
//         renderBoard();
//     }
// }

// // Add Group logic
// function addGroup() {
//     const groupName = prompt("Enter new group name:");
//     if (!groupName || !groupName.trim()) return;

//     const groups = loadBoardState();
//     if (groups.some(g => g.name === groupName.trim())) {
//         alert("A group with this name already exists!");
//         return;
//     }
//     groups.push({ name: groupName.trim(), tasks: [] });
//     saveBoardState(groups);
//     renderBoard();
// }

// // Remove Group logic
// function removeGroup(groupName) {
//     if (DEFAULT_GROUPS.some(def => def.name === groupName)) return;
//     let groups = loadBoardState();
//     groups = groups.filter(g => g.name !== groupName);
//     saveBoardState(groups);
//     renderBoard();
// }

// // Attach listeners on page load
// window.onload = function () {
//     // Render the board from storage
//     renderBoard();

//     // Add group button
//     document.querySelector(".group_button button").onclick = addGroup;
// };

// Key for localStorage
const STORAGE_KEY = "pmb_board_data";

// Default groups
const DEFAULT_GROUPS = [
    { name: "To Do", tasks: [] },
    { name: "Pending", tasks: [] },
    { name: "Staging", tasks: [] }
];

// Utility: Save state to localStorage
function saveBoardState(groups) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(groups));
}

// Utility: Load state from localStorage or set defaults
function loadBoardState() {
    let data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        return JSON.parse(data);
    } else {
        saveBoardState(DEFAULT_GROUPS);
        return JSON.parse(JSON.stringify(DEFAULT_GROUPS));
    }
}

// Utility: Render all groups and tasks
function renderBoard() {
    const groups = loadBoardState();
    const boardsDiv = document.querySelector(".boards");
    boardsDiv.innerHTML = ""; // Clear current

    groups.forEach(group => {
        const board = document.createElement("div");
        board.className = "boardlist";
        board.setAttribute("data-id", group.name);

        // Title & Remove button (not for default groups)
        const titleDiv = document.createElement("div");
        titleDiv.className = "list_title";
        titleDiv.innerHTML = `<h2>${group.name}</h2>`;
        board.appendChild(titleDiv);

        // Tasks
        group.tasks.forEach(task => {
            board.appendChild(createTaskElement(task, group.name));
        });

        // Add Task button
        const taskBtnDiv = document.createElement("div");
        taskBtnDiv.className = "task_button";
        const addTaskBtn = document.createElement("button");
        addTaskBtn.className = "add";
        addTaskBtn.textContent = "Add Task";
        addTaskBtn.onclick = () => addTask(group.name);
        taskBtnDiv.appendChild(addTaskBtn);
        board.appendChild(taskBtnDiv);

        boardsDiv.appendChild(board);
    });
}

// Utility: Create a task DOM element
function createTaskElement(taskText, groupName) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.textContent = taskText;
    return taskDiv;
}

// Add Task logic
function addTask(groupName) {
    const task = prompt("Enter task:");
    if (task && task.trim()) {
        const groups = loadBoardState();
        const group = groups.find(g => g.name === groupName);
        if (group) {
            group.tasks.push(task.trim());
            saveBoardState(groups);
            renderBoard();
        }
    }
}

// Remove Task logic
function removeTask(groupName, taskText) {
    const groups = loadBoardState();
    const group = groups.find(g => g.name === groupName);
    if (group) {
        group.tasks = group.tasks.filter(t => t !== taskText);
        saveBoardState(groups);
        renderBoard();
    }
}

// Add Group logic
function addGroup() {
    const groupName = prompt("Enter new group name:");
    if (!groupName || !groupName.trim()) return;

    const groups = loadBoardState();
    if (groups.some(g => g.name === groupName.trim())) {
        alert("A group with this name already exists!");
        return;
    }
    groups.push({ name: groupName.trim(), tasks: [] });
    saveBoardState(groups);
    renderBoard();
}

// Remove Group logic
function removeGroup(groupName) {
    if (DEFAULT_GROUPS.some(def => def.name === groupName)) return;
    let groups = loadBoardState();
    groups = groups.filter(g => g.name !== groupName);
    saveBoardState(groups);
    renderBoard();
}

// Attach listeners on page load
window.onload = function () {
    // Render the board from storage
    renderBoard();

    // Add group button
    document.querySelector(".group_button button").onclick = addGroup;
};
