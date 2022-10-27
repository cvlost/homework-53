import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import Task from "./lib/Task";
import TaskView from "./components/TaskView/TaskView";

function App() {
  const [currentTask, setCurrentTask] = useState('');
  const [tasks, setTasks] = useState(Task.createTasks([
    {task: 'Create AddTaskForm component', isDone: true},
    {task: 'Create TaskView component', isDone: true},
    {task: 'Mix all together', isDone: false},
    {task: 'Add some styles', isDone: false},
    {task: 'Delete unused files and chunks of code', isDone: false},
  ]));

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const addNewTask = () => {
    const newTask = new Task({task: currentTask, isDone: false});
    setTasks([...tasks, newTask]);
    setCurrentTask('');
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const changeTaskState = (index: number) => {
    const tasksCopy = [...tasks];
    const taskCopy = {...tasks[index]};
    taskCopy.isDone = !taskCopy.isDone;
    tasksCopy[index] = taskCopy;
    setTasks(tasksCopy);
  };

  return (
    <div className="App">
      <h1 className="App-title">ToDo list</h1>
      <AddTaskForm onInputChange={updateInput} inputValue={currentTask} onBtnClick={addNewTask} />
      <div className="tasks-container">
        {tasks.map((task, i) => (
          <TaskView
            key={task.id}
            task={task.task}
            onDelClick={() => deleteTask(i)}
            isDone={task.isDone}
            onStateChange={() => changeTaskState(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
