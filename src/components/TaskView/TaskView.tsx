import React from 'react';
import './TaskView.css';

interface TaskProps {
  task: string;
  isDone: boolean;
  onStateChange: React.ChangeEventHandler;
  onDelClick: React.MouseEventHandler;
}

const TaskView: React.FC<TaskProps> = ({task, onDelClick, isDone, onStateChange}) => {
  const className = `task ${isDone ? 'task-done' : ''}`;

  return (
    <div className={className}>
      <input type="checkbox" checked={isDone} onChange={onStateChange}/>
      <div className="task-text">{task}</div>
      <button className="task-del-btn" onClick={onDelClick}>Delete</button>
    </div>
  );
};

export default TaskView;