export const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8000/api';

export const APP_CATEGORIES = {
  SOCIAL: ['WeChat', 'QQ', 'Weibo', 'Douyin', 'Kuaishou', 'WhatsApp', 'Facebook', 'Instagram', 'Twitter'],
  ENTERTAINMENT: ['YouTube', 'Netflix', 'Bilibili', 'iQiyi', 'Tencent Video'],
  WORK: ['DingTalk', 'WeCom', 'Slack', 'Microsoft Teams', 'Zoom'],
  STUDY: ['Khan Academy', 'Coursera', 'Duolingo', 'Anki'],
  HEALTH: ['Health', 'Fitness', 'Meditation']
};

export const DEFAULT_USAGE_LIMITS = {
  SOCIAL: 60, // minutes per day
  ENTERTAINMENT: 90,
  WORK: 480,
  STUDY: 120
};

export const POINTS_SYSTEM = {
  DAILY_CHECKIN: 10,
  GOAL_COMPLETED: 50,
  TASK_COMPLETED_EASY: 5,
  TASK_COMPLETED_MEDIUM: 10,
  TASK_COMPLETED_HARD: 20,
  CHALLENGE_COMPLETED: 100
};

export const HEALTH_INDEX_WEIGHTS = {
  SCREEN_TIME: 0.4,
  SOCIAL_MEDIA_TIME: 0.3,
  ENTERTAINMENT_TIME: 0.2,
  GOAL_COMPLETION: 0.1
};
