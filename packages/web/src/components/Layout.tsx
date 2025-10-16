import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  FlagIcon,
  FireIcon,
  UserGroupIcon,
  GiftIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: '仪表盘', href: '/', icon: HomeIcon },
  { name: '使用分析', href: '/usage', icon: ChartBarIcon },
  { name: '目标管理', href: '/goals', icon: FlagIcon },
  { name: '专注模式', href: '/focus', icon: FireIcon },
  { name: '社区', href: '/community', icon: UserGroupIcon },
  { name: '奖励', href: '/rewards', icon: GiftIcon },
  { name: '个人', href: '/profile', icon: UserIcon },
];

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <h1 className="text-2xl font-bold text-primary-600">Unplug</h1>
            </div>
            <nav className="mt-8 flex-1 space-y-1 px-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-primary-100 text-primary-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-6 w-6 flex-shrink-0 ${
                        isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 z-10">
        <nav className="flex justify-around">
          {navigation.slice(0, 5).map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex-1 flex flex-col items-center py-2 text-xs ${
                  isActive ? 'text-primary-600' : 'text-gray-600'
                }`}
              >
                <item.icon className="h-6 w-6 mb-1" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
