import React from 'react';

const StatusFilter = ({ filter, setFilter }) => {
  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <select value={filter} onChange={handleChange}>
      <option value="all">All</option>
      <option value="to_do">To do</option>
      <option value="in_progress">In progress</option>
      <option value="done">Done</option>
      <option value="overdue">Overdue</option>
      <option value="rejected">Rejected</option>
    </select>
  );
};

export default StatusFilter;