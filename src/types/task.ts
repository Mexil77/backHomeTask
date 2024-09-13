export interface Recurrent {
  active: boolean;
  days: number;
}

export interface Task {
  name: string;
  status: string;
  dateToDone: Date;
  dateDone: Date;
  daysToDone: number;
  recurrent: Recurrent;
}
