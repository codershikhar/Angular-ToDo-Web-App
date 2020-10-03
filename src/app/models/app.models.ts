export interface ITodoList {
  id?: number;
  name: string;
  completed?: number;
  total?: number;
}

export interface ITask {
  id?: number;
  todoList: number;
  task: string;
  completed?: boolean;
}

export interface IReminder {
  id?: number;
  title: string;
  description: string;
  dateTime: Date;
}
