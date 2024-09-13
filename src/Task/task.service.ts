import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/types';
import { TaskDocument, Task as TaskSchema } from './task.schema';
import { Model, now } from 'mongoose';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TaskSchema.name)
    private readonly taskModel: Model<TaskDocument>,
  ) {}

  async addTask(taskDto: TaskDto): Promise<TaskDto> {
    return await this.taskModel.create(taskDto);
  }

  async modifyTask(taskId: string, taskDto: TaskDto): Promise<TaskDto> {
    return await this.taskModel.findByIdAndUpdate(taskId, taskDto);
  }

  async getTasks(): Promise<Task[]> {
    const res = await this.taskModel.aggregate([
      {
        $project: {
          name: 1,
          status: 1,
          dateToDone: 1,
          recurrent: 1,
          showId: {
            $substrCP: [
              { $toString: '$_id' },
              { $subtract: [{ $strLenCP: { $toString: '$_id' } }, 4] },
              4,
            ],
          },
          daysToDone: {
            $round: {
              $divide: [
                { $subtract: ['$dateToDone', now()] },
                24 * 60 * 60 * 1000,
              ],
            },
          },
        },
      },
    ]);
    return res;
  }

  async removeTask(taskId: string): Promise<TaskDto> {
    return await this.taskModel.findByIdAndDelete(taskId);
  }
}
