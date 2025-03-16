import { TodoItem } from "./todoItem";

export class TodoCollection {
  private nextId: number = 1;

  constructor(public userName: string, public todoItems: TodoItem[] = []) {}

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
  }

  getTodoById(id: number): TodoItem {
    return this.todoItems.find((item) => item.id === id);
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }

  //   removeComplete() {
  //     this.itemMap.forEach((item) => {
  //       if (item.complete) {
  //         this.itemMap.delete(item.id);
  //       }
  //     });
  //   }

  //   getItemCounts(): ItemCounts {
  //     return {
  //       total: this.itemMap.size,
  //       incomplete: this.getTodoItems(false).length,
  //     };
  //   }
}
