import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from "./task.entity"

@Injectable()
export class TasksService {

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
    createTask() {}
    updateTask() {}
    deleteTask() {}
}
