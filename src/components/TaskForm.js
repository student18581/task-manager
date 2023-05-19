import React, { useState, useEffect } from 'react';

const TaskForm = ({ tasks, setTasks, selectedTask, updateTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('to_do');

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setDueDate(selectedTask.dueDate);
      setStatus(selectedTask.status);
    }
  }, [selectedTask]);

const handleSubmit = e => {
  e.preventDefault();
  const today = new Date();
  const taskDueDate = new Date(dueDate);
  const status = taskDueDate < today ? 'overdue' : 'to_do';
  if (selectedTask) {
    const updatedTask = {
      ...selectedTask,
      title,
      description,
      dueDate,
      status
    };
    updateTask(updatedTask);
  } else {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      dueDate,
      status
    };
    setTasks([...tasks, newTask]);
  }
  setTitle('');
  setDescription('');
  setDueDate('');
  setStatus('to_do');
};

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required></textarea>
      <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="to_do">To do</option>
        <option value="in_progress">In progress</option>
        <option value="done">Done</option>
        <option value="overdue">Overdue</option>
        <option value="rejected">Rejected</option>
      </select>
      <button type="submit">{selectedTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;