import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema({ _id: false })
class Recurrent {
  @Prop()
  active: boolean;

  @Prop()
  days: number;
}

@Schema()
export class Task {
  @Prop()
  name: string;

  @Prop()
  status: string;

  @Prop()
  dateDone: Date;

  @Prop()
  dateToDone: Date;

  @Prop()
  recurrent: Recurrent;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
