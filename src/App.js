import React, { useState } from 'react';
import './App.css'
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm';
import StatusFilter from './components/StatusFilter';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState('all');
  const [showTaskForm, setShowTaskForm] = useState(false);

  const deleteTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = updatedTask => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const toggleTaskForm = () => {
    setSelectedTask(null)
    setShowTaskForm(true);
  };

  return (
    <div className="container">
      <div className = 'header'>
        <h1 className="text-center">Task Manager</h1>
      </div>
      <div className="row">
        <div className="col-md-4 left-column">
          <button onClick={toggleTaskForm} className="btn btn-primary create-task-button">Create New Task</button>
          <StatusFilter filter={filter} setFilter={setFilter} />
          <TaskList tasks={tasks} filter={filter} setSelectedTask={setSelectedTask} deleteTask={deleteTask} />

        </div>
        <div className="col-md-8 right-column">
          {selectedTask ? (
            <TaskDetails task={selectedTask} />
          ) : (null)}
          {showTaskForm && (
            <TaskForm tasks={tasks} setTasks={setTasks} selectedTask={selectedTask} updateTask={updateTask} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
