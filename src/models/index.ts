export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export enum Filter {
  All = 'all',
  Todo = 'todo',
  Done = 'done',
}
