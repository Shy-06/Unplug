export function Community() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">社区</h1>
        <p className="mt-1 text-sm text-gray-500">
          与志同道合的伙伴一起，互相鼓励和支持
        </p>
      </div>

      {/* Challenges */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">热门挑战</h2>
        <div className="space-y-4">
          <ChallengeCard
            title="7 天不刷短视频"
            participants={1234}
            daysLeft={3}
            reward={100}
          />
          <ChallengeCard
            title="30 天早起打卡"
            participants={892}
            daysLeft={15}
            reward={200}
          />
          <ChallengeCard
            title="连续专注 21 天"
            participants={567}
            daysLeft={8}
            reward={150}
          />
        </div>
      </div>

      {/* Groups */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">兴趣小组</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GroupCard name="早起打卡组" members={234} />
          <GroupCard name="读书爱好者" members={456} />
          <GroupCard name="运动健身" members={789} />
          <GroupCard name="技能学习" members={321} />
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">本周排行榜</h2>
        <div className="space-y-3">
          <LeaderboardItem rank={1} name="用户A" points={1250} />
          <LeaderboardItem rank={2} name="用户B" points={1180} />
          <LeaderboardItem rank={3} name="用户C" points={1050} />
          <LeaderboardItem rank={4} name="你" points={890} isCurrentUser />
        </div>
      </div>
    </div>
  );
}

function ChallengeCard({
  title,
  participants,
  daysLeft,
  reward,
}: {
  title: string;
  participants: number;
  daysLeft: number;
  reward: number;
}) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-primary-500 transition-colors">
      <div className="flex-1">
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
        <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
          <span>👥 {participants} 人参与</span>
          <span>⏰ 剩余 {daysLeft} 天</span>
          <span>🏆 +{reward} 积分</span>
        </div>
      </div>
      <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 text-sm font-medium">
        参与挑战
      </button>
    </div>
  );
}

function GroupCard({ name, members }: { name: string; members: number }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:border-primary-500 transition-colors">
      <h3 className="text-base font-medium text-gray-900">{name}</h3>
      <p className="mt-1 text-sm text-gray-500">👥 {members} 成员</p>
      <button className="mt-3 w-full px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 text-sm font-medium">
        加入小组
      </button>
    </div>
  );
}

function LeaderboardItem({
  rank,
  name,
  points,
  isCurrentUser,
}: {
  rank: number;
  name: string;
  points: number;
  isCurrentUser?: boolean;
}) {
  const medalEmoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '';

  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg ${
        isCurrentUser ? 'bg-primary-50 border-2 border-primary-500' : 'bg-gray-50'
      }`}
    >
      <div className="flex items-center space-x-3">
        <span className="text-lg font-semibold text-gray-900 w-8">
          {medalEmoji || `#${rank}`}
        </span>
        <span className="text-sm font-medium text-gray-900">{name}</span>
      </div>
      <span className="text-sm font-semibold text-gray-900">{points} 积分</span>
    </div>
  );
}
