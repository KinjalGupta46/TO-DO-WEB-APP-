const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const datetime = document.getElementById('task-datetime');
const taskList = document.getElementById('task-list');

// Add a task
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = input.value.trim();
  const taskTime = datetime.value;
  if (taskText && taskTime) {
    addTask(taskText, taskTime);
    input.value = '';
    datetime.value = '';
  }
});

// Add task to UI
function addTask(text, time) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span><strong>${text}</strong><br/><small>${new Date(time).toLocaleString()}</small></span>
    <div class="actions">
      <button class="done-btn">✔</button>
      <button class="edit-btn">✎</button>
      <button class="delete-btn">🗑</button>
    </div>
  `;

  li.querySelector('.done-btn').addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.querySelector('.edit-btn').addEventListener('click', () => {
    const newText = prompt('Edit task:', text);
    if (newText) {
      li.querySelector('strong').innerText = newText;
    }
  });

  li.querySelector('.delete-btn').addEventListener('click', () => {
    li.remove();
  });

  taskList.appendChild(li);
}

// Sample Tasks
window.addEventListener('DOMContentLoaded', () => {
  const tasks = [
    { text: 'Complete internship project report', time: '2025-07-01T14:00' },
    { text: 'Attend team stand-up meeting', time: '2025-07-02T10:30' },
    { text: 'Submit UI design demo', time: '2025-07-03T16:45' }
  ];
  tasks.forEach(task => addTask(task.text, task.time));
});
