import React from 'react';
import './AddTaskForm.css';

type AddTask = () => void;

interface AddTaskProps {
  onInputChange: React.ChangeEventHandler;
  inputValue: string;
  addTask: AddTask;
}

const AddTaskForm: React.FC<AddTaskProps> = ({onInputChange, inputValue, addTask}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    addTask();
  };

  return (
    <div className="task-form">
      <input
        className="task-form-input"
        onKeyDown={handleKeyDown}
        type="text"
        onChange={onInputChange}
        value={inputValue}
        autoFocus
      />
      <button className="task-form-btn" onClick={addTask}><span>&#65291;</span></button>
    </div>
  );
};

export default AddTaskForm;