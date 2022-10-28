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
      <input className="task-checkbox" type="checkbox" checked={isDone} onChange={onStateChange}/>
      <div className="task-text">{task}</div>
      <button className="task-del-btn" onClick={onDelClick}><span>&#65291;</span></button>
    </div>
  );
};

export default TaskView;