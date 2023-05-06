import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from "./task.entity"
import {v4} from "uuid"

@Injectable()
export class TasksService {

    // simulate db
    private tasks: Task[] = [
        {
            id: "1",
            title: "buy stuff",
            description: "go buy some food",
            status: TaskStatus.PENDING
        }
    ]

    getAllTasks() {
        return this.tasks
    }
    createTask(title: string, description: string) {
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task);
        return task;
    }
    updateTask() {}
    deleteTask() {}
}
