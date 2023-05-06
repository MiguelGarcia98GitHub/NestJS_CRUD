import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import {TasksService} from "./tasks.service";
import { CreateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks()
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDto) {
        return this.tasksService.createTask(newTask.title, newTask.description)
    }

    @Delete(":id")
    deleteTask(@Param("id") id: string) {
        return this.tasksService.deleteTask(id)
    }

}
