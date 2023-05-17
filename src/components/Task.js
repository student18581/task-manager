import React from 'react';

const Task = ({ task, setSelectedTask, deleteTask }) => {
  const handleDelete = e => {
    e.stopPropagation();
    deleteTask(task.id);
  };

  return (
    <li className="list-group-item" onClick={() => setSelectedTask(task)}>
      {task.title}
      <button onClick={handleDelete} className="btn btn-danger btn-sm float-right">Delete</button>
    </li>
  );
};

export default Task;