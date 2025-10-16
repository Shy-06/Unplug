export interface UsageSession {
  id: string;
  userId: string;
  appName: string;
  appCategory: AppCategory;
  startTime: Date;
  endTime: Date;
  duration: number; // milliseconds
  deviceType: DeviceType;
}

export enum AppCategory {
  SOCIAL = 'social',
  ENTERTAINMENT = 'entertainment',
  WORK = 'work',
  STUDY = 'study',
  HEALTH = 'health',
  OTHER = 'other'
}

export enum DeviceType {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  WEB = 'web'
}

export interface UsageStats {
  totalTime: number;
  byCategory: Record<AppCategory, number>;
  byApp: Record<string, number>;
  healthIndex: number;
  comparedToLastWeek: number; // percentage
}

export interface UsageReport {
  userId: string;
  period: ReportPeriod;
  startDate: Date;
  endDate: Date;
  stats: UsageStats;
  topApps: Array<{ name: string; time: number; category: AppCategory }>;
  insights: string[];
}

export enum ReportPeriod {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly'
}
