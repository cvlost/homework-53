import React from 'react';
import './TaskView.css';

interface TaskProps {
  task: string;
  onDelClick: React.MouseEventHandler;
}

const TaskView: React.FC<TaskProps> = ({task, onDelClick}) => {
  return (
    <div className="task">
      <div className="task-text">{task}</div>
      <button className="task-del-btn" onClick={onDelClick}>Delete</button>
    </div>
  );
};

export default TaskView;