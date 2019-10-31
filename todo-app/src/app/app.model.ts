export class TodoItem {

    taskDescription: string
    dueDate: string;

    constructor(taskDescription: string, dueDate?: string) {
        this.taskDescription = taskDescription;
        this.dueDate = dueDate;
    }
}