import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

export function Usage() {
  const [period, setPeriod] = useState<'day' | 'week' | 'month'>('day');

  const { data: usageData } = useQuery({
    queryKey: ['usage', period],
    queryFn: async () => {
      // Mock data
      return {
        categoryData: [
          { name: '社交', value: 120, color: '#4F46E5' },
          { name: '娱乐', value: 90, color: '#10B981' },
          { name: '工作', value: 180, color: '#F59E0B' },
          { name: '学习', value: 60, color: '#EF4444' },
        ],
        dailyData: [
          { day: '周一', time: 240 },
          { day: '周二', time: 180 },
          { day: '周三', time: 220 },
          { day: '周四', time: 190 },
          { day: '周五', time: 260 },
          { day: '周六', time: 320 },
          { day: '周日', time: 280 },
        ],
        topApps: [
          { name: 'WeChat', time: 80, category: '社交' },
          { name: 'Douyin', time: 60, category: '娱乐' },
          { name: 'Bilibili', time: 45, category: '娱乐' },
          { name: 'DingTalk', time: 120, category: '工作' },
        ],
      };
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">使用分析</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setPeriod('day')}
            className={`px-4 py-2 rounded-md ${
              period === 'day'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            今日
          </button>
          <button
            onClick={() => setPeriod('week')}
            className={`px-4 py-2 rounded-md ${
              period === 'week'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            本周
          </button>
          <button
            onClick={() => setPeriod('month')}
            className={`px-4 py-2 rounded-md ${
              period === 'month'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            本月
          </button>
        </div>
      </div>

      {/* Category Distribution */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">应用类别分布</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={usageData?.categoryData || []}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {usageData?.categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Daily Trend */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">每日使用趋势</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={usageData?.dailyData || []}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="time" fill="#4F46E5" name="使用时间 (分钟)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Apps */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">最常用应用</h2>
        <div className="space-y-3">
          {usageData?.topApps.map((app, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 font-semibold">{index + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{app.name}</p>
                  <p className="text-xs text-gray-500">{app.category}</p>
                </div>
              </div>
              <div className="text-sm font-medium text-gray-900">{app.time} 分钟</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
