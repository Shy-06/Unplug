# 开发指南 / Development Guide

本文档面向开发者，提供 Unplug 项目的开发环境配置、架构说明和开发规范。

This document is for developers, providing development environment setup, architecture explanation, and development standards for the Unplug project.

## 开发环境要求 / Development Requirements

### 必需软件 / Required Software

- **Node.js**: >= 14.x (推荐 LTS 版本)
- **npm**: >= 6.x 或 **yarn**: >= 1.x
- **Git**: >= 2.x
- **代码编辑器**: VS Code (推荐) / WebStorm / 其他

### 推荐安装 / Recommended Tools

- **Docker**: 用于本地容器化开发
- **Postman**: API 测试
- **MongoDB Compass**: 数据库管理
- **Redis Desktop Manager**: Redis 管理

## 项目结构 / Project Structure

```
Unplug/
├── docs/                      # 文档目录
│   ├── api/                   # API 文档
│   ├── design/                # 设计文档
│   └── specs/                 # 规格说明
├── packages/                  # Monorepo 包结构
│   ├── web/                   # Web 应用
│   │   ├── src/
│   │   │   ├── components/    # React 组件
│   │   │   ├── pages/         # 页面组件
│   │   │   ├── services/      # API 服务
│   │   │   ├── store/         # 状态管理
│   │   │   ├── utils/         # 工具函数
│   │   │   └── App.tsx        # 应用入口
│   │   ├── public/            # 静态资源
│   │   └── package.json
│   ├── mobile/                # 移动应用 (React Native)
│   │   ├── src/
│   │   ├── android/
│   │   ├── ios/
│   │   └── package.json
│   ├── desktop/               # 桌面应用 (Electron)
│   │   ├── src/
│   │   ├── main/
│   │   ├── renderer/
│   │   └── package.json
│   ├── extension/             # 浏览器插件
│   │   ├── src/
│   │   ├── manifest.json
│   │   └── package.json
│   ├── server/                # 后端服务
│   │   ├── src/
│   │   │   ├── controllers/   # 控制器
│   │   │   ├── models/        # 数据模型
│   │   │   ├── routes/        # 路由
│   │   │   ├── middleware/    # 中间件
│   │   │   ├── services/      # 业务逻辑
│   │   │   └── server.ts      # 服务器入口
│   │   └── package.json
│   ├── analytics/             # 分析服务 (Python)
│   │   ├── src/
│   │   ├── models/            # ML 模型
│   │   ├── requirements.txt
│   │   └── setup.py
│   └── shared/                # 共享代码
│       ├── types/             # TypeScript 类型定义
│       ├── utils/             # 共享工具
│       └── constants/         # 常量定义
├── infrastructure/            # 基础设施
│   ├── docker/                # Docker 配置
│   ├── kubernetes/            # K8s 配置
│   └── terraform/             # 云资源配置
├── scripts/                   # 构建和部署脚本
├── tests/                     # 测试
│   ├── unit/                  # 单元测试
│   ├── integration/           # 集成测试
│   └── e2e/                   # 端到端测试
├── .github/                   # GitHub 配置
│   └── workflows/             # CI/CD 工作流
├── .gitignore
├── package.json               # 根 package.json (workspace)
├── tsconfig.json              # TypeScript 配置
├── README.md
├── CONTRIBUTING.md
├── LICENSE
└── ARCHITECTURE.md
```

## 快速开始 / Quick Start

### 1. 克隆仓库 / Clone Repository

```bash
git clone https://github.com/Shy-06/Unplug.git
cd Unplug
```

### 2. 安装依赖 / Install Dependencies

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 3. 环境配置 / Environment Configuration

创建 `.env` 文件：

```bash
# Web App
cp packages/web/.env.example packages/web/.env

# Server
cp packages/server/.env.example packages/server/.env
```

编辑 `.env` 文件，配置必要的环境变量：

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/unplug
MONGODB_URI=mongodb://localhost:27017/unplug
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# API Keys (optional for development)
SENDGRID_API_KEY=your-sendgrid-key
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
```

### 4. 启动开发服务器 / Start Development Servers

```bash
# 启动所有服务
npm run dev

# 或分别启动
npm run dev:web        # Web 应用 (http://localhost:3000)
npm run dev:server     # API 服务器 (http://localhost:8000)
npm run dev:mobile     # 移动应用
npm run dev:desktop    # 桌面应用
```

### 5. 运行测试 / Run Tests

```bash
# 运行所有测试
npm test

# 单元测试
npm run test:unit

# 集成测试
npm run test:integration

# E2E 测试
npm run test:e2e

# 测试覆盖率
npm run test:coverage
```

## 技术栈详解 / Tech Stack Details

### 前端技术 / Frontend Technologies

#### Web 应用
- **React 18+**: UI 框架
- **TypeScript**: 类型安全
- **Vite**: 构建工具
- **React Router**: 路由管理
- **Zustand**: 状态管理
- **TanStack Query**: 数据获取和缓存
- **Tailwind CSS**: 样式框架
- **Recharts**: 数据可视化
- **Framer Motion**: 动画库

#### 移动应用
- **React Native**: 跨平台框架
- **React Navigation**: 导航
- **React Native Paper**: UI 组件库
- **AsyncStorage**: 本地存储
- **Expo** (可选): 开发工具

#### 桌面应用
- **Electron**: 桌面框架
- **React**: UI
- **electron-store**: 本地存储
- **electron-updater**: 自动更新

### 后端技术 / Backend Technologies

#### API 服务器
- **Node.js + Express**: Web 框架
- **TypeScript**: 类型安全
- **Prisma**: ORM
- **PostgreSQL**: 关系数据库
- **MongoDB**: 时序数据
- **Redis**: 缓存和队列
- **JWT**: 认证
- **bcrypt**: 密码加密
- **Winston**: 日志
- **Jest**: 测试框架

#### 分析服务
- **Python + FastAPI**: API 框架
- **pandas**: 数据处理
- **scikit-learn**: 机器学习
- **TensorFlow Lite**: 轻量级 ML
- **Celery**: 异步任务队列

### DevOps 工具 / DevOps Tools

- **Docker**: 容器化
- **Kubernetes**: 容器编排
- **GitHub Actions**: CI/CD
- **Terraform**: 基础设施即代码
- **Prometheus**: 监控
- **Grafana**: 可视化
- **Sentry**: 错误追踪
- **ELK Stack**: 日志聚合

## 开发规范 / Development Standards

### 代码风格 / Code Style

#### JavaScript/TypeScript
```javascript
// 使用 ESLint + Prettier
// 配置文件: .eslintrc.js, .prettierrc

// 命名规范
const userName = 'John';           // 变量：camelCase
const USER_ROLE = 'admin';         // 常量：UPPER_SNAKE_CASE
function getUserData() {}          // 函数：camelCase
class UserService {}               // 类：PascalCase
interface UserData {}              // 接口：PascalCase
type UserId = string;              // 类型：PascalCase

// 函数注释
/**
 * 获取用户使用数据
 * @param userId - 用户ID
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @returns 使用数据数组
 */
async function getUserUsageData(
  userId: string,
  startDate: Date,
  endDate: Date
): Promise<UsageData[]> {
  // 实现...
}
```

#### Python
```python
# 使用 Black + Flake8
# 配置文件: .flake8, pyproject.toml

# 命名规范
user_name = 'John'              # 变量：snake_case
USER_ROLE = 'admin'             # 常量：UPPER_SNAKE_CASE
def get_user_data():            # 函数：snake_case
    pass
class UserService:              # 类：PascalCase
    pass

# 函数文档
def get_user_usage_data(
    user_id: str,
    start_date: datetime,
    end_date: datetime
) -> List[UsageData]:
    """
    获取用户使用数据
    
    Args:
        user_id: 用户ID
        start_date: 开始日期
        end_date: 结束日期
    
    Returns:
        使用数据列表
    """
    # 实现...
```

### Git 工作流 / Git Workflow

#### 分支策略 / Branch Strategy

```
main                    # 生产分支，只接受 merge
├── develop             # 开发分支
│   ├── feature/xxx     # 功能分支
│   ├── bugfix/xxx      # Bug 修复分支
│   └── refactor/xxx    # 重构分支
├── release/x.x.x       # 发布分支
└── hotfix/xxx          # 紧急修复分支
```

#### 提交信息规范 / Commit Message Convention

遵循 Conventional Commits 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type 类型：**
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具变动

**示例：**
```
feat(monitor): add real-time usage tracking

- Implement background service for tracking
- Add local database storage
- Integrate with system APIs

Closes #123
```

### 测试规范 / Testing Standards

#### 测试覆盖率要求
- 核心业务逻辑：≥ 80%
- 工具函数：≥ 90%
- UI 组件：≥ 60%

#### 测试类型
```javascript
// 单元测试示例
describe('UsageTracker', () => {
  it('should track app usage time correctly', () => {
    const tracker = new UsageTracker();
    tracker.start('WeChat');
    // 模拟使用 1 分钟
    jest.advanceTimersByTime(60000);
    tracker.stop('WeChat');
    
    expect(tracker.getUsageTime('WeChat')).toBe(60000);
  });
});

// 集成测试示例
describe('API /users/usage', () => {
  it('should return user usage data', async () => {
    const response = await request(app)
      .get('/api/users/123/usage')
      .query({ startDate: '2025-01-01', endDate: '2025-01-31' })
      .expect(200);
    
    expect(response.body).toHaveProperty('totalTime');
    expect(response.body.apps).toBeInstanceOf(Array);
  });
});
```

### API 设计规范 / API Design Standards

#### RESTful API
```
GET    /api/users              # 获取用户列表
GET    /api/users/:id          # 获取单个用户
POST   /api/users              # 创建用户
PUT    /api/users/:id          # 更新用户
DELETE /api/users/:id          # 删除用户

GET    /api/users/:id/usage    # 获取用户使用数据
POST   /api/goals              # 创建目标
GET    /api/community/posts    # 获取社区帖子
```

#### 响应格式
```javascript
// 成功响应
{
  "success": true,
  "data": {
    // 数据内容
  },
  "message": "操作成功"
}

// 错误响应
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "输入数据验证失败",
    "details": [
      {
        "field": "email",
        "message": "邮箱格式不正确"
      }
    ]
  }
}
```

## 调试技巧 / Debugging Tips

### 前端调试 / Frontend Debugging

#### React DevTools
```bash
# 安装浏览器插件
# Chrome: React Developer Tools
# Firefox: React Developer Tools
```

#### Redux/Zustand DevTools
```bash
# 使用浏览器插件查看状态变化
# Chrome: Redux DevTools
```

#### 网络请求调试
```javascript
// 使用拦截器打印请求
axios.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response:', response);
  return response;
});
```

### 后端调试 / Backend Debugging

#### VS Code 调试配置
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Server",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/packages/server/src/server.ts",
      "preLaunchTask": "tsc: build - packages/server/tsconfig.json",
      "outFiles": ["${workspaceFolder}/packages/server/dist/**/*.js"]
    }
  ]
}
```

#### 日志调试
```javascript
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

logger.info('User logged in', { userId: '123' });
logger.error('Database connection failed', { error });
```

## 性能优化 / Performance Optimization

### 前端优化 / Frontend Optimization

1. **代码分割 / Code Splitting**
```javascript
// 路由懒加载
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Reports = lazy(() => import('./pages/Reports'));
```

2. **图片优化 / Image Optimization**
```javascript
// 使用 WebP 格式
// 懒加载图片
<img loading="lazy" src="image.webp" alt="..." />
```

3. **缓存策略 / Caching Strategy**
```javascript
// React Query 配置
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 分钟
      cacheTime: 10 * 60 * 1000, // 10 分钟
    },
  },
});
```

### 后端优化 / Backend Optimization

1. **数据库索引 / Database Indexes**
```sql
-- PostgreSQL
CREATE INDEX idx_user_id ON usage_sessions(user_id);
CREATE INDEX idx_created_at ON usage_sessions(created_at);
```

2. **查询优化 / Query Optimization**
```javascript
// 使用分页
const users = await prisma.user.findMany({
  skip: (page - 1) * limit,
  take: limit,
  select: { id: true, name: true, email: true } // 只选择需要的字段
});
```

3. **缓存策略 / Caching Strategy**
```javascript
// Redis 缓存
async function getUserUsage(userId) {
  const cacheKey = `user:${userId}:usage:today`;
  const cached = await redis.get(cacheKey);
  
  if (cached) {
    return JSON.parse(cached);
  }
  
  const data = await fetchUsageFromDB(userId);
  await redis.setex(cacheKey, 3600, JSON.stringify(data));
  
  return data;
}
```

## 部署指南 / Deployment Guide

### 开发环境 / Development
```bash
npm run dev
```

### 预发布环境 / Staging
```bash
npm run build:staging
npm run deploy:staging
```

### 生产环境 / Production
```bash
npm run build:production
npm run deploy:production
```

### Docker 部署 / Docker Deployment
```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f
```

## 故障排查 / Troubleshooting

### 常见问题 / Common Issues

1. **依赖安装失败 / Dependency Installation Failed**
```bash
# 清理缓存
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

2. **数据库连接失败 / Database Connection Failed**
```bash
# 检查数据库是否运行
docker ps | grep postgres

# 检查连接字符串
echo $DATABASE_URL
```

3. **端口占用 / Port Already in Use**
```bash
# 查找占用端口的进程
lsof -i :3000

# 杀死进程
kill -9 <PID>
```

## 资源链接 / Resources

- [API 文档](https://api.unplug.app/docs)
- [设计系统](https://design.unplug.app)
- [技术博客](https://blog.unplug.app)
- [开发者论坛](https://dev.unplug.app)

## 获取帮助 / Get Help

- GitHub Issues: https://github.com/Shy-06/Unplug/issues
- Discord: https://discord.gg/unplug
- Email: dev@unplug.app

---

Happy Coding! 🚀
