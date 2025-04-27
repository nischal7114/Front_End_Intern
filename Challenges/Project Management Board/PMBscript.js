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

        // Title 
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

// Attach listeners on page load
window.onload = function () {
    // Render the board from storage
    renderBoard();

    // Add group button
    document.querySelector(".group_button button").onclick = addGroup;
};