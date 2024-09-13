import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from 'src/types';
import { TaskDocument, TaskSchemaClass } from './task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(TaskSchemaClass.name)
    private readonly taskModel: Model<TaskDocument>,
  ) {}

  async getTasks(): Promise<Task[]> {
    // await this.taskModel.create({
    //   name: 'Lavar ropa',
    //   recurrent: { active: true, days: 3 },
    //   dateToDone: new Date(),
    //   dateDone: new Date(),
    //   daysToDone: 3,
    //   status: TaskStatus.PENDING,
    // });
    const finded = await this.taskModel.find();

    return finded;
  }
}
