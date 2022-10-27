import React from 'react';
import './AddTaskForm.css';

interface AddTaskProps {
  onInputChange: React.ChangeEventHandler;
  inputValue: string;
  onBtnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const AddTaskForm: React.FC<AddTaskProps> = ({onInputChange, inputValue, onBtnClick}) => {
  return (
    <div className="task-form">
      <input className="task-form-input" type="text" onChange={onInputChange} value={inputValue}/>
      <button className="task-form-btn" onClick={onBtnClick}>Add</button>
    </div>
  );
};

export default AddTaskForm;