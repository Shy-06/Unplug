export function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">个人中心</h1>
      </div>

      {/* Profile Info */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary-400 to-primary-600"></div>
        <div className="px-6 pb-6">
          <div className="flex items-end -mt-16">
            <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center text-4xl">
              👤
            </div>
            <div className="ml-6 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">用户昵称</h2>
              <p className="text-sm text-gray-500">user@example.com</p>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">7</div>
              <div className="text-sm text-gray-500">连续打卡</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">78</div>
              <div className="text-sm text-gray-500">健康指数</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">890</div>
              <div className="text-sm text-gray-500">积分</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">15</div>
              <div className="text-sm text-gray-500">成就</div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">成就徽章</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="text-center">
              <div className="h-16 w-16 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-2xl">
                🏆
              </div>
              <p className="mt-2 text-xs text-gray-600">成就 {i}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">设置</h2>
        <div className="space-y-3">
          <SettingItem title="账号设置" />
          <SettingItem title="隐私设置" />
          <SettingItem title="通知设置" />
          <SettingItem title="数据导出" />
          <SettingItem title="关于我们" />
        </div>
        <button className="mt-6 w-full px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 text-sm font-medium">
          退出登录
        </button>
      </div>
    </div>
  );
}

function SettingItem({ title }: { title: string }) {
  return (
    <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <span className="text-sm font-medium text-gray-900">{title}</span>
      <svg
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
