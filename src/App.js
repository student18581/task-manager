import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm';
import StatusFilter from './components/StatusFilter';

function App() {
  const [tasks, setTasks] = useState([]); // stan zadań
  const [selectedTask, setSelectedTask] = useState(null); // stan wybranego zadania
  const [filter, setFilter] = useState('all'); // stan filtra

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = updatedTask => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <StatusFilter filter={filter} setFilter={setFilter} />
          <TaskList tasks={tasks} filter={filter} setSelectedTask={setSelectedTask} deleteTask={deleteTask} />
        </div>
        <div className="col-md-8">
          {selectedTask ? (
            <TaskDetails task={selectedTask} />
          ) : (
            <h1 className="text-center">Task Manager</h1>
          )}
          <TaskForm tasks={tasks} setTasks={setTasks} selectedTask={selectedTask} updateTask={updateTask} />
        </div>
      </div>
    </div>
  );
}

export default App;