import React, {useRef, useState} from 'react';
import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Task from "./lib/Task";
import TaskView from "./components/TaskView/TaskView";

function App() {
  const [currentTask, setCurrentTask] = useState('');
  const [tasks, setTasks] = useState(Task.createTasks([
    'Create AddTaskForm component',
    'Create TaskView component',
    'Mix all together',
    'Add some styles',
    'Delete unused files and chunks of code',
  ]));

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const addNewTask = () => {
    console.log(`Added task: ${currentTask}`)
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <div className="App">
      <AddTaskForm onInputChange={updateInput} inputValue={currentTask} onBtnClick={addNewTask} />
      <div className="tasks-container">
        {tasks.map((task, i) => <TaskView key={task.id} task={task.task} onDelClick={() => deleteTask(i)} />)}
      </div>
    </div>
  );
}

export default App;
