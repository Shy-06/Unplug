export interface Task {
  id: string;
  title: string;
  description: string;
  category: TaskCategory;
  duration: number; // minutes
  difficulty: TaskDifficulty;
  points: number;
  iconUrl?: string;
}

export enum TaskCategory {
  EXERCISE = 'exercise',
  LEARNING = 'learning',
  MEDITATION = 'meditation',
  HOBBY = 'hobby',
  SOCIAL = 'social',
  OTHER = 'other'
}

export enum TaskDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export interface UserTask {
  id: string;
  userId: string;
  taskId: string;
  task: Task;
  status: TaskStatus;
  startedAt?: Date;
  completedAt?: Date;
  notes?: string;
}

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  SKIPPED = 'skipped'
}
