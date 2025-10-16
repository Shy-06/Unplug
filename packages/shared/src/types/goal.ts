export interface Goal {
  id: string;
  userId: string;
  type: GoalType;
  title: string;
  description?: string;
  targetValue: number;
  currentValue: number;
  period: GoalPeriod;
  startDate: Date;
  endDate: Date;
  status: GoalStatus;
  createdAt: Date;
}

export enum GoalType {
  REDUCE_TIME = 'reduce_time',
  INCREASE_FOCUS = 'increase_focus',
  CONTINUOUS_CHECKIN = 'continuous_checkin',
  LIMIT_SCREEN_TIME = 'limit_screen_time'
}

export enum GoalPeriod {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  CUSTOM = 'custom'
}

export enum GoalStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  FAILED = 'failed',
  PAUSED = 'paused'
}
