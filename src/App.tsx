import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

function App() {
  const [currentTask, setCurrentTask] = useState('');

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const addNewTask = () => {
    console.log(`Added task: ${currentTask}`)
  };

  return (
    <div className="App">
      <AddTaskForm onInputChange={updateInput} inputValue={currentTask} onBtnClick={addNewTask} />
    </div>
  );
}

export default App;
