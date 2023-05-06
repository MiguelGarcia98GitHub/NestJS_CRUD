import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from "./task.entity"
import {v4} from "uuid"
import { UpdateTaskDto } from './dto/task.dto';

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
    
    deleteTask(id: string) {
       const messageToClient =   !!this.tasks.find(task => {
        return task.id === id
       }) ? `successfully deleted task with the id: ${id}` : `could not find a task to delete with the id: ${id}`
       this.tasks = this.tasks.filter(task => task.id !== id)
       return messageToClient
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }

    updateTask(id: string, updateFields: UpdateTaskDto): Task {
        const task = this.getTaskById(id);
        const newTask = Object.assign(task, updateFields);
        this.tasks =  this.tasks.map(task => task.id === id ? newTask : task)
        return newTask;
    }

    
}
