import { Recurrent } from 'src/types';

export class TaskDto {
  readonly name: string;
  readonly status: string;
  readonly dateToDone: Date;
  readonly dateDone: Date;
  readonly recurrent: Recurrent;
}
