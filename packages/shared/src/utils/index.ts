export function formatDuration(milliseconds: number): string {
  const totalMinutes = Math.floor(milliseconds / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes}m`;
}

export function calculateHealthIndex(stats: {
  totalScreenTime: number;
  socialMediaTime: number;
  entertainmentTime: number;
  goalCompletionRate: number;
}): number {
  const { totalScreenTime, socialMediaTime, entertainmentTime, goalCompletionRate } = stats;
  
  // Normalize values (lower is better for time, higher is better for goals)
  const maxScreenTime = 480; // 8 hours in minutes
  const normalizedScreenTime = 1 - Math.min(totalScreenTime / maxScreenTime, 1);
  const normalizedSocialTime = 1 - Math.min(socialMediaTime / 120, 1); // 2 hours max
  const normalizedEntertainmentTime = 1 - Math.min(entertainmentTime / 180, 1); // 3 hours max
  
  // Calculate weighted score
  const score = (
    normalizedScreenTime * 0.4 +
    normalizedSocialTime * 0.3 +
    normalizedEntertainmentTime * 0.2 +
    goalCompletionRate * 0.1
  ) * 100;
  
  return Math.round(score);
}

export function isWithinUsageLimit(usageTime: number, limit: number): boolean {
  return usageTime <= limit;
}

export function getDayOfWeek(date: Date): string {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}
