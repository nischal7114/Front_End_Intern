// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.boardlist .task_button .add');
    const boardsContainer = document.querySelector('.boards'); // Assuming tasks will be added inside .boardlist

    addButtons.forEach(addButton => {
        addButton.addEventListener('click', function() {
            const boardList = this.closest('.boardlist'); // Find the parent board list
            const taskText = prompt('Enter new task:');
            if (taskText) {
                const newTask = document.createElement('div');
                newTask.classList.add('task-item'); // Add a class for styling
                newTask.textContent = taskText;

                // Assuming you want to append the new task somewhere within the boardlist
                boardList.insertBefore(newTask, this.parentNode); // Insert before the "Add Task" button
                // OR boardList.appendChild(newTask); // Append at the end

                // You'll likely want to make these tasks draggable later
            }
        });
    });

    // --- More JavaScript for other functionalities will go here ---
});