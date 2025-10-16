import { useQuery } from '@tanstack/react-query';
import { formatDuration } from '@unplug/shared';

export function Dashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      // Mock data for now
      return {
        todayScreenTime: 125, // minutes
        healthScore: 78,
        goalsCompleted: 3,
        totalGoals: 5,
        streak: 7,
        todayFocusTime: 45,
      };
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">仪表盘</h1>
        <p className="mt-1 text-sm text-gray-500">
          欢迎回来！让我们一起保持健康的数字习惯。
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="今日屏幕时间"
          value={formatDuration(stats!.todayScreenTime * 60000)}
          subtitle="比昨天少 15%"
          color="blue"
        />
        <StatCard
          title="健康指数"
          value={`${stats!.healthScore}/100`}
          subtitle="良好状态"
          color="green"
        />
        <StatCard
          title="目标完成"
          value={`${stats!.goalsCompleted}/${stats!.totalGoals}`}
          subtitle="今日进度"
          color="purple"
        />
        <StatCard
          title="连续打卡"
          value={`${stats!.streak} 天`}
          subtitle="继续保持"
          color="orange"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">快速操作</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
            开始专注
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            查看任务
          </button>
          <button className="flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            参与挑战
          </button>
        </div>
      </div>

      {/* Today's Goals */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">今日目标</h2>
        <div className="space-y-3">
          <GoalItem title="限制社交媒体使用" progress={75} />
          <GoalItem title="专注工作 2 小时" progress={60} />
          <GoalItem title="完成 1 个替代任务" progress={100} />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  color,
}: {
  title: string;
  value: string;
  subtitle: string;
  color: string;
}) {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={`${colors[color as keyof typeof colors]} rounded-md p-3`}>
              <div className="h-6 w-6 text-white">📊</div>
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}

function GoalItem({ title, progress }: { title: string; progress: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-700">{title}</span>
        <span className="text-gray-500">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
