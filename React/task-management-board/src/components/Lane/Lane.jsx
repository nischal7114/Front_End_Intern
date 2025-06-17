import { useState } from 'react';
import Task from '../Task/Task';

export default function Lane({ lane, tasks, setTasks }) {
  // New task input states
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskBody, setNewTaskBody] = useState('');

  // Add new task handler
  const addTask = () => {
    if (!newTaskTitle.trim()) return;
    const newTask = {
      id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      title: newTaskTitle.trim(),
      body: newTaskBody.trim(),
      laneId: lane.id,
    };
    setTasks(prev => [...prev, newTask]);
    setNewTaskTitle('');
    setNewTaskBody('');
  };

  return (
    <div style={{
      backgroundColor: '#f0f0f0',
      borderRadius: 6,
      padding: 10,
      minWidth: 250,
      maxHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h3 style={{ textAlign: 'center' }}>{lane.title}</h3>

      <div style={{ flex: 1, overflowY: 'auto', marginBottom: 10 }}>
        {tasks.length === 0 && <p style={{ textAlign: 'center', color: '#666' }}>No tasks</p>}
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="Task title"
          value={newTaskTitle}
          onChange={e => setNewTaskTitle(e.target.value)}
          style={{ width: '100%', marginBottom: 5, padding: '5px' }}
        />
        <textarea
          placeholder="Task details"
          value={newTaskBody}
          onChange={e => setNewTaskBody(e.target.value)}
          style={{ width: '100%', marginBottom: 5, padding: '5px', resize: 'vertical' }}
          rows={2}
        />
        <button onClick={addTask} style={{ width: '100%', padding: '6px' }}>
          Add Task
        </button>
      </div>
    </div>
  );
}
