export interface User {
  id: string;
  email?: string;
  phone?: string;
  username: string;
  isAnonymous: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  userId: string;
  dailyUsageGoal: number; // minutes
  targetApps: string[];
  healthScore: number;
  level: number;
  points: number;
  avatarUrl?: string;
}

export interface AuthCredentials {
  email?: string;
  phone?: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}
