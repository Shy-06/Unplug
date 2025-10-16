import { useState, useEffect } from 'react';

export function Focus() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [mode, setMode] = useState<'focus' | 'break'>('focus');

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Timer finished
      if (mode === 'focus') {
        setMode('break');
        setTimeLeft(5 * 60); // 5 minute break
      } else {
        setMode('focus');
        setTimeLeft(25 * 60); // 25 minute focus
      }
      setIsActive(false);
      // Play notification sound here
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, mode]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'focus' ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((mode === 'focus' ? 25 * 60 : 5 * 60) - timeLeft) / (mode === 'focus' ? 25 * 60 : 5 * 60) * 100;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">专注模式</h1>
        <p className="mt-1 text-sm text-gray-500">
          使用番茄工作法提高专注力和效率
        </p>
      </div>

      {/* Timer Card */}
      <div className="bg-white shadow rounded-lg p-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-6">
            {mode === 'focus' ? '🎯 专注时间' : '☕ 休息时间'}
          </div>

          <div className="relative inline-flex items-center justify-center">
            <svg className="transform -rotate-90 w-64 h-64">
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="#E5E7EB"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="#4F46E5"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 120}`}
                strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
                className="transition-all duration-1000 ease-linear"
              />
            </svg>
            <div className="absolute text-6xl font-bold text-gray-900">
              {formatTime(timeLeft)}
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={toggleTimer}
              className={`px-8 py-3 rounded-md text-white font-medium ${
                isActive
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-primary-600 hover:bg-primary-700'
              }`}
            >
              {isActive ? '暂停' : '开始'}
            </button>
            <button
              onClick={resetTimer}
              className="px-8 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
            >
              重置
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="text-sm font-medium text-gray-500">今日专注次数</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">8</div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="text-sm font-medium text-gray-500">今日专注时长</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">3.5 h</div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="text-sm font-medium text-gray-500">本周总时长</div>
          <div className="mt-2 text-3xl font-semibold text-gray-900">18 h</div>
        </div>
      </div>

      {/* Blocked Apps */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">专注期间屏蔽应用</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {['WeChat', 'Douyin', 'Bilibili', 'Weibo', 'QQ', 'Instagram'].map((app) => (
            <div key={app} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-900">{app}</span>
              <button className="text-red-600 hover:text-red-700">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <button className="mt-4 text-sm text-primary-600 hover:text-primary-700">
          + 添加更多应用
        </button>
      </div>
    </div>
  );
}
