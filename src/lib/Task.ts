class Task {
  public id: string;

  constructor(public task: string) {
    this.id = (Task.nextId++).toString();
  }

  static nextId = 0;

  static createTasks(tasks: string[]) {
    return tasks.map(task => new Task(task));
  }
}

export default Task;