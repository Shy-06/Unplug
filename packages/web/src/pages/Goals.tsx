import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function Goals() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const { data: goals } = useQuery({
    queryKey: ['goals'],
    queryFn: async () => {
      // Mock data
      return [
        {
          id: '1',
          title: '减少社交媒体使用',
          description: '每天使用社交媒体不超过 60 分钟',
          targetValue: 60,
          currentValue: 45,
          period: 'daily',
          status: 'active',
          progress: 75,
        },
        {
          id: '2',
          title: '专注工作时间',
          description: '每天至少专注工作 2 小时',
          targetValue: 120,
          currentValue: 90,
          period: 'daily',
          status: 'active',
          progress: 75,
        },
        {
          id: '3',
          title: '连续打卡 30 天',
          description: '连续 30 天完成每日目标',
          targetValue: 30,
          currentValue: 7,
          period: 'custom',
          status: 'active',
          progress: 23,
        },
      ];
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">目标管理</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
        >
          + 创建目标
        </button>
      </div>

      {/* Active Goals */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {goals?.map((goal) => (
          <div key={goal.id} className="bg-white shadow rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{goal.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{goal.description}</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                进行中
              </span>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">进度</span>
                <span className="text-gray-900 font-medium">
                  {goal.currentValue}/{goal.targetValue}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <button className="text-sm text-primary-600 hover:text-primary-700">
                查看详情
              </button>
              <button className="text-sm text-gray-500 hover:text-gray-700">
                暂停
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Completed Goals */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">已完成的目标</h2>
        <div className="space-y-3">
          <CompletedGoalItem title="完成 7 天挑战" date="2025-01-10" points={100} />
          <CompletedGoalItem title="减少屏幕时间 20%" date="2025-01-08" points={50} />
        </div>
      </div>
    </div>
  );
}

function CompletedGoalItem({ title, date, points }: { title: string; date: string; points: number }) {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <span className="text-2xl">🎯</span>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
        +{points} 积分
      </span>
    </div>
  );
}
