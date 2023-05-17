import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, filter, setSelectedTask, deleteTask }) => {
  const filteredTasks = tasks.filter(task => filter === 'all' || task.status === filter);

  return (
    <ul className="list-group">
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} setSelectedTask={setSelectedTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;