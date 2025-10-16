export function Rewards() {
  const userPoints = 890;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">奖励中心</h1>
        <div className="flex items-center space-x-2 px-4 py-2 bg-yellow-100 rounded-lg">
          <span className="text-2xl">💰</span>
          <span className="text-lg font-semibold text-gray-900">{userPoints} 积分</span>
        </div>
      </div>

      {/* Earn Points */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">赚取积分</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <EarnPointsCard title="每日打卡" points={10} icon="✓" />
          <EarnPointsCard title="完成目标" points={50} icon="🎯" />
          <EarnPointsCard title="参与挑战" points={100} icon="🏆" />
        </div>
      </div>

      {/* Available Rewards */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">可兑换奖励</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <RewardCard
            title="1 个月会员"
            description="解锁高级功能"
            points={500}
            available={userPoints >= 500}
          />
          <RewardCard
            title="定制头像框"
            description="个性化展示"
            points={300}
            available={userPoints >= 300}
          />
          <RewardCard
            title="专属徽章"
            description="显示你的成就"
            points={200}
            available={userPoints >= 200}
          />
          <RewardCard
            title="优惠券 10 元"
            description="课程优惠券"
            points={1000}
            available={userPoints >= 1000}
          />
          <RewardCard
            title="线下活动门票"
            description="参与社区活动"
            points={1500}
            available={userPoints >= 1500}
          />
          <RewardCard
            title="实物礼品"
            description="精美周边"
            points={2000}
            available={userPoints >= 2000}
          />
        </div>
      </div>

      {/* Redemption History */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">兑换记录</h2>
        <div className="space-y-3">
          <RedemptionItem
            title="定制头像框"
            date="2025-01-10"
            points={300}
            status="已发放"
          />
          <RedemptionItem
            title="专属徽章"
            date="2025-01-05"
            points={200}
            status="已发放"
          />
        </div>
      </div>
    </div>
  );
}

function EarnPointsCard({ title, points, icon }: { title: string; points: number; icon: string }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg text-center hover:border-primary-500 transition-colors">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-lg font-semibold text-primary-600">+{points} 积分</p>
    </div>
  );
}

function RewardCard({
  title,
  description,
  points,
  available,
}: {
  title: string;
  description: string;
  points: number;
  available: boolean;
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-primary-400 to-primary-600"></div>
      <div className="p-4">
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">{points} 积分</span>
          <button
            disabled={!available}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              available
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {available ? '兑换' : '积分不足'}
          </button>
        </div>
      </div>
    </div>
  );
}

function RedemptionItem({
  title,
  date,
  points,
  status,
}: {
  title: string;
  date: string;
  points: number;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-gray-900">-{points} 积分</p>
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
          {status}
        </span>
      </div>
    </div>
  );
}
