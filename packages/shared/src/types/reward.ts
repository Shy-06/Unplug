export interface Reward {
  id: string;
  title: string;
  description: string;
  pointsCost: number;
  category: RewardCategory;
  imageUrl?: string;
  stock?: number;
}

export enum RewardCategory {
  VIRTUAL = 'virtual',
  PHYSICAL = 'physical',
  DISCOUNT = 'discount',
  PRIVILEGE = 'privilege'
}

export interface UserReward {
  id: string;
  userId: string;
  rewardId: string;
  reward: Reward;
  redeemedAt: Date;
  status: RewardStatus;
}

export enum RewardStatus {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  EXPIRED = 'expired'
}

export interface PointTransaction {
  id: string;
  userId: string;
  amount: number;
  type: PointTransactionType;
  reason: string;
  createdAt: Date;
}

export enum PointTransactionType {
  EARN = 'earn',
  SPEND = 'spend',
  EXPIRE = 'expire'
}
