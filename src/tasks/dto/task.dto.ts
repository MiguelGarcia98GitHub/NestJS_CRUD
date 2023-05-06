import { TaskStatus } from "../task.entity"
import {IsNotEmpty, IsString, MinLength, IsOptional, IsIn} from "class-validator"

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string
    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    description: string    
}

export class UpdateTaskDto {
    @IsString()
    @MinLength(5)
    @IsOptional()
    title?: string

    @IsString()
    @MinLength(10)
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus
}