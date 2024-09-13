import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = TaskSchemaClass & Document;

@Schema()
class Recurrent {
  @Prop()
  active: boolean;

  @Prop()
  days: number;
}

@Schema()
export class TaskSchemaClass {
  @Prop()
  name: string;

  @Prop()
  status: string;

  @Prop()
  dateDone: Date;

  @Prop()
  dateToDone: Date;

  @Prop()
  daysToDone: number;

  @Prop()
  recurrent: Recurrent;
}

export const TaskSchema = SchemaFactory.createForClass(TaskSchemaClass);
