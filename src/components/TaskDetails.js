import React from 'react';

const TaskDetails = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due date: {task.dueDate}</p>
    </div>
  );
};

export default TaskDetails;