# 项目设置指南 / Project Setup Guide

## 快速开始 / Quick Start

### 前置要求 / Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### 安装步骤 / Installation Steps

```bash
# 1. 克隆仓库 / Clone repository
git clone https://github.com/Shy-06/Unplug.git
cd Unplug

# 2. 安装依赖 / Install dependencies
npm install

# 3. 设置环境变量 / Setup environment variables
cp packages/server/.env.example packages/server/.env
# 编辑 .env 文件配置数据库等信息

# 4. 启动开发服务器 / Start development servers
npm run dev
```

### 访问应用 / Access Application

- Web 应用: http://localhost:3000
- API 服务器: http://localhost:8000
- API 文档: http://localhost:8000/api-docs (待实现)

## 详细说明 / Detailed Instructions

### 1. 环境配置 / Environment Configuration

#### Web 应用配置
Web 应用使用 Vite 的环境变量系统。创建 `packages/web/.env`:

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

#### 服务器配置
复制示例配置并修改：

```bash
cp packages/server/.env.example packages/server/.env
```

编辑 `packages/server/.env`:

```env
PORT=8000
NODE_ENV=development

# 数据库配置 (如果使用数据库)
DATABASE_URL=postgresql://user:password@localhost:5432/unplug
MONGODB_URI=mongodb://localhost:27017/unplug
REDIS_URL=redis://localhost:6379

# JWT 密钥 (生产环境请使用强密钥)
JWT_SECRET=your-super-secret-key-change-in-production
JWT_EXPIRES_IN=7d
```

### 2. 开发服务器 / Development Servers

#### 启动所有服务
```bash
npm run dev
```

这将同时启动：
- Web 应用 (localhost:3000)
- API 服务器 (localhost:8000)

#### 单独启动服务
```bash
# 仅启动 Web 应用
npm run dev:web

# 仅启动 API 服务器
npm run dev:server
```

### 3. 构建项目 / Build Project

```bash
# 构建所有包
npm run build

# 构建特定包
npm run build:web      # Web 应用
npm run build:server   # API 服务器
```

构建输出：
- `packages/web/dist/` - Web 应用静态文件
- `packages/server/dist/` - 编译后的服务器代码

### 4. 代码质量检查 / Code Quality

```bash
# 运行 ESLint
npm run lint

# 自动修复代码风格问题
npm run lint:fix

# 格式化代码
npm run format

# 检查格式
npm run format:check
```

### 5. 测试 / Testing

```bash
# 运行所有测试
npm test

# 运行单元测试
npm run test:unit

# 运行集成测试
npm run test:integration

# 运行 E2E 测试
npm run test:e2e

# 生成测试覆盖率报告
npm run test:coverage
```

## 项目结构详解 / Project Structure Details

```
Unplug/
├── packages/
│   ├── web/                    # Web 应用 (PWA)
│   │   ├── src/
│   │   │   ├── components/     # React 组件
│   │   │   ├── pages/          # 页面组件
│   │   │   ├── services/       # API 服务
│   │   │   ├── store/          # 状态管理
│   │   │   ├── styles/         # 样式文件
│   │   │   └── utils/          # 工具函数
│   │   ├── public/             # 静态资源
│   │   ├── index.html          # HTML 模板
│   │   ├── vite.config.ts      # Vite 配置
│   │   └── package.json
│   ├── server/                 # API 服务器
│   │   ├── src/
│   │   │   ├── controllers/    # 控制器
│   │   │   ├── models/         # 数据模型
│   │   │   ├── routes/         # 路由
│   │   │   ├── middleware/     # 中间件
│   │   │   ├── services/       # 业务逻辑
│   │   │   ├── config/         # 配置
│   │   │   └── server.ts       # 服务器入口
│   │   └── package.json
│   ├── shared/                 # 共享代码
│   │   ├── src/
│   │   │   ├── types/          # TypeScript 类型
│   │   │   ├── constants/      # 常量
│   │   │   └── utils/          # 共享工具
│   │   └── package.json
│   └── mobile/                 # 移动应用 (预留)
├── scripts/                    # 构建脚本
├── docs/                       # 文档 (可选)
├── .github/                    # GitHub 配置
│   └── workflows/              # CI/CD
├── package.json                # 根配置
├── README.md                   # 项目说明
├── SETUP.md                    # 本文档
├── PWA_GUIDE.md               # PWA 指南
└── IMPLEMENTATION_GUIDE.md    # 实施指南
```

## 常见问题 / Troubleshooting

### 问题 1: 端口被占用
```
Error: listen EADDRINUSE: address already in use :::3000
```

**解决方案**:
```bash
# 查找占用端口的进程
lsof -i :3000
# 或
netstat -ano | findstr :3000  # Windows

# 终止进程或更改端口
# 修改 packages/web/vite.config.ts 中的 server.port
```

### 问题 2: 依赖安装失败
```
npm ERR! code ERESOLVE
```

**解决方案**:
```bash
# 清理缓存
npm cache clean --force

# 删除 node_modules 和 lock 文件
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 问题 3: TypeScript 类型错误
```
error TS2307: Cannot find module '@unplug/shared'
```

**解决方案**:
```bash
# 构建 shared 包
cd packages/shared
npm run build

# 返回根目录重新安装
cd ../..
npm install
```

### 问题 4: PWA 不工作
在开发模式下，PWA 功能可能不完全可用。

**解决方案**:
```bash
# 构建生产版本
npm run build:web

# 预览生产版本
cd packages/web
npm run preview
```

## 开发工作流 / Development Workflow

### 1. 创建新功能 / Creating New Features

```bash
# 创建功能分支
git checkout -b feature/your-feature-name

# 开发...
# 提交代码
git add .
git commit -m "feat: add your feature description"

# 推送到远程
git push origin feature/your-feature-name

# 创建 Pull Request
```

### 2. 提交规范 / Commit Convention

使用 Conventional Commits 规范：

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type 类型**:
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式
- `refactor`: 重构
- `test`: 测试
- `chore`: 构建/工具

**示例**:
```bash
git commit -m "feat(auth): add email verification"
git commit -m "fix(usage): correct time calculation"
git commit -m "docs(readme): update installation steps"
```

### 3. 代码审查 / Code Review

提交 PR 前确保：
- [ ] 代码通过 lint 检查
- [ ] 所有测试通过
- [ ] 添加了必要的文档
- [ ] 更新了 CHANGELOG.md
- [ ] 代码有适当的注释

## 性能优化 / Performance Optimization

### 开发环境优化
```bash
# 使用 SWC 替代 Babel (更快)
# 已在 vite.config.ts 中配置

# 启用 HMR (热模块替换)
# Vite 默认启用
```

### 生产环境优化
```bash
# 构建时优化
npm run build

# 分析包大小
npm run build -- --analyze
```

## 部署 / Deployment

### 部署到 Vercel (推荐用于 Web 应用)

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
cd packages/web
vercel
```

### 部署到 Heroku (推荐用于 API 服务器)

```bash
# 安装 Heroku CLI
# 参考: https://devcenter.heroku.com/articles/heroku-cli

# 部署
cd packages/server
heroku create your-app-name
git push heroku main
```

### Docker 部署 (待实现)

```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d
```

## 监控和日志 / Monitoring & Logging

### 开发环境日志
```bash
# Server logs
npm run dev:server
# 日志输出到控制台

# Web console
# 打开浏览器开发者工具查看日志
```

### 生产环境日志
```bash
# Server logs 保存到文件
# 位置: packages/server/logs/
# - error.log (错误日志)
# - combined.log (所有日志)
```

## 安全最佳实践 / Security Best Practices

1. **不要提交敏感信息**
   - .env 文件已在 .gitignore 中
   - 使用环境变量管理密钥

2. **使用 HTTPS**
   - 生产环境必须使用 HTTPS
   - 配置 SSL 证书

3. **定期更新依赖**
   ```bash
   npm audit
   npm audit fix
   ```

4. **实施 CORS 策略**
   - 已在 server.ts 中配置
   - 生产环境限制允许的域名

## 获取帮助 / Getting Help

- 📚 文档: 查看项目其他 .md 文件
- 💬 讨论: https://github.com/Shy-06/Unplug/discussions
- 🐛 报告问题: https://github.com/Shy-06/Unplug/issues
- 📧 邮件: dev@unplug.app

## 贡献 / Contributing

欢迎贡献！请阅读 `CONTRIBUTING.md` 了解详情。

---

*最后更新: 2025-01-16*
