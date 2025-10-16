export interface Group {
  id: string;
  name: string;
  description: string;
  category: string;
  memberCount: number;
  isPrivate: boolean;
  createdAt: Date;
  createdBy: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  duration: number; // days
  startDate: Date;
  endDate: Date;
  participantCount: number;
  goalType: string;
  targetValue: number;
  rewards: number; // points
}

export interface ChallengeParticipant {
  id: string;
  challengeId: string;
  userId: string;
  progress: number;
  status: ChallengeStatus;
  joinedAt: Date;
  completedAt?: Date;
}

export enum ChallengeStatus {
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
  ABANDONED = 'abandoned'
}

export interface Post {
  id: string;
  userId: string;
  groupId?: string;
  content: string;
  imageUrls?: string[];
  likes: number;
  comments: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  rarity: AchievementRarity;
  condition: string;
}

export enum AchievementRarity {
  COMMON = 'common',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary'
}

export interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  achievement: Achievement;
  unlockedAt: Date;
}
