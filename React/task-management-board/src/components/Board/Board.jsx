import { useState } from 'react';
import Lane from '../Lane/Lane';

export default function Board({ lanes, setLanes }) {
  // Tasks state with laneId to associate
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', body: 'Details of task 1', laneId: 1 },
    { id: 2, title: 'Task 2', body: 'Details of task 2', laneId: 2 },
  ]);

  // New lane input state
  const [newLaneTitle, setNewLaneTitle] = useState('');

  // Add new lane handler
  const addLane = () => {
    if (!newLaneTitle.trim()) return;
    const newLane = {
      id: lanes.length ? Math.max(...lanes.map(l => l.id)) + 1 : 1,
      title: newLaneTitle.trim(),
    };
    setLanes([...lanes, newLane]);
    setNewLaneTitle('');
  };

  return (
    <div>
      <h2>Task Board</h2>
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="New lane title"
          value={newLaneTitle}
          onChange={e => setNewLaneTitle(e.target.value)}
          style={{ padding: '5px 10px', fontSize: 16, marginRight: 10 }}
        />
        <button onClick={addLane} style={{ padding: '6px 12px', fontSize: 16 }}>
          Add Lane
        </button>
      </div>

      <div style={{ display: 'flex', gap: 20, overflowX: 'auto' }}>
        {lanes.map(lane => (
          <Lane
            key={lane.id}
            lane={lane}
            tasks={tasks.filter(task => task.laneId === lane.id)}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
}
