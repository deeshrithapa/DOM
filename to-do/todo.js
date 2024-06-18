document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        } else if (e.target.classList.contains('checkbox')) {
            const li = e.target.parentElement;
            li.classList.toggle('completed');
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('checkbox');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');

            li.appendChild(checkbox);
            li.appendChild(taskSpan);
            li.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInput.value = '';
            taskInput.focus();
        }
    }
});
