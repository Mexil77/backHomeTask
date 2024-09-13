import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from 'src/types';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Put(':_id')
  modifyTask(
    @Param('_id') taskId: string,
    @Body() taskDto: TaskDto,
  ): Promise<TaskDto> {
    return this.taskService.modifyTask(taskId, taskDto);
  }

  @Post()
  addTask(@Body() taskDto: TaskDto): Promise<TaskDto> {
    return this.taskService.addTask(taskDto);
  }

  @Delete(':_id')
  removeTask(@Param('_id') taskId: string): Promise<TaskDto> {
    return this.taskService.removeTask(taskId);
  }
}
