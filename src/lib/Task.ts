type TaskData = {
  task: string;
  isDone: boolean;
};

class Task {
  public task: string;
  public id: string;
  public isDone: boolean;

  constructor(taskData: TaskData) {
    this.task = taskData.task !== '' ? taskData.task : '¯\\_(ツ)_/¯';
    this.id = (Task.nextId++).toString();
    this.isDone = taskData.isDone;
  }

  static nextId = 0;

  static createTasks(tasksData: TaskData[]) {
    return tasksData.map(task => new Task(task));
  }
}

export default Task;