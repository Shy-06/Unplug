# Unplug: Reset your life

> 帮助青年人摆脱网瘾，重置生活状态 / Helping young people overcome internet addiction and reset their lives

[![PWA](https://img.shields.io/badge/PWA-Ready-success)](./PWA_GUIDE.md)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-61dafb)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](./LICENSE)

## 🎯 项目简介 / Project Overview

Unplug 是一款专为青年人设计的**数字健康管理平台**，采用 PWA（Progressive Web App）技术，提供原生应用般的体验，帮助用户建立健康的数字使用习惯，摆脱网瘾困扰。

Unplug is a **digital wellness management platform** designed for young people, using PWA (Progressive Web App) technology to provide a native app-like experience, helping users establish healthy digital usage habits and overcome internet addiction.

### ✨ 项目特色 / Key Features

- 🌐 **完整的 PWA 支持** - 可安装、离线可用、自动更新
- 📱 **跨平台** - Web、移动端、桌面端统一体验  
- 📊 **数据可视化** - 直观的使用分析和趋势图表
- 🎯 **目标管理** - 设定和追踪个人改善目标
- 🔥 **专注模式** - 番茄工作法助力高效工作
- 👥 **社区支持** - 挑战、小组、互相监督
- 🎁 **积分奖励** - 完成任务赚积分，兑换奖励
- 🤖 **AI 推荐** - 个性化的替代任务和建议

## 🚀 快速开始 / Quick Start

### 在线体验 / Try Online
访问 Demo (待部署) / Visit Demo (Coming Soon): https://unplug.app

### 本地运行 / Run Locally

```bash
# 1. 克隆仓库
git clone https://github.com/Shy-06/Unplug.git
cd Unplug

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 访问应用
# Web 应用: http://localhost:3000
# API 服务器: http://localhost:8000
```

详细安装说明请查看 [SETUP.md](./SETUP.md)

## 📱 核心功能 / Core Features

### 1. 📊 使用时间监控
- 实时追踪应用使用时间
- 应用分类统计（社交、娱乐、工作等）
- 可视化趋势分析
- 健康指数计算

### 2. 🎯 目标管理
- 创建个性化改善目标
- 实时追踪目标进度
- 目标完成统计
- 历史目标回顾

### 3. 🔥 专注模式
- 番茄工作法计时器（25分钟 + 5分钟）
- 应用屏蔽列表管理
- 专注时长统计
- 严格模式锁定

### 4. 👥 社区互动
- 7天挑战（不刷短视频等）
- 兴趣小组（早起、读书、运动）
- 每周排行榜
- 互相监督鼓励

### 5. 🎁 积分奖励
- 完成任务赚取积分
- 积分兑换奖励
- 会员特权、定制头像、优惠券
- 兑换记录追踪

### 6. 🤖 智能推荐
- AI 推荐替代任务
- 个性化活动建议
- 学习资源推荐
- 运动计划推荐

### 7. 🌐 PWA 功能
- ✅ 可安装到主屏幕
- ✅ 离线可用
- ✅ 后台同步
- ✅ 推送通知（架构已就绪）
- ✅ 自动更新

详细 PWA 说明请查看 [PWA_GUIDE.md](./PWA_GUIDE.md)

## 🏗️ 技术架构 / Technical Architecture

### 前端技术栈 / Frontend Stack
- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 快速构建工具
- **Tailwind CSS** - 样式框架
- **TanStack Query** - 数据管理
- **Recharts** - 数据可视化
- **PWA (vite-plugin-pwa)** - 渐进式 Web 应用

### 后端技术栈 / Backend Stack
- **Node.js + Express** - API 服务器
- **TypeScript** - 类型安全
- **Winston** - 日志系统
- **JWT** - 身份认证
- **PostgreSQL** - 关系型数据库（待集成）
- **MongoDB** - 文档数据库（待集成）
- **Redis** - 缓存系统（待集成）

### 架构特点 / Architecture Highlights
- 🏗️ **Monorepo** - npm workspaces 管理多包
- 🔒 **类型安全** - 全栈 TypeScript
- 📦 **模块化** - 清晰的模块划分
- 🔌 **可扩展** - 易于添加新功能
- 🚀 **高性能** - 代码分割、懒加载
- 🔐 **安全** - JWT 认证、CORS 配置

## 📂 项目结构 / Project Structure

```
Unplug/
├── packages/
│   ├── web/                 # Web 应用 (PWA)
│   │   ├── src/
│   │   │   ├── pages/       # 页面组件
│   │   │   ├── components/  # 可复用组件
│   │   │   └── styles/      # 样式文件
│   │   ├── public/          # 静态资源
│   │   └── vite.config.ts   # Vite + PWA 配置
│   ├── server/              # API 服务器
│   │   ├── src/
│   │   │   ├── routes/      # API 路由
│   │   │   ├── middleware/  # 中间件
│   │   │   └── config/      # 配置
│   │   └── .env.example     # 环境变量示例
│   ├── shared/              # 共享代码
│   │   └── src/
│   │       ├── types/       # TypeScript 类型
│   │       ├── constants/   # 常量
│   │       └── utils/       # 工具函数
│   └── mobile/              # 移动应用 (预留)
├── scripts/                 # 构建脚本
├── .github/                 # GitHub 配置
├── README.md               # 本文档
├── SETUP.md                # 详细安装指南
├── PWA_GUIDE.md            # PWA 实现指南
├── IMPLEMENTATION_GUIDE.md # 功能实现指南
└── package.json            # 根配置
```

## 📚 文档 / Documentation

- 📖 [安装和设置指南](./SETUP.md) - 详细的安装步骤和配置说明
- 🌐 [PWA 实现指南](./PWA_GUIDE.md) - PWA 功能详解和使用指南
- 🔧 [功能实现指南](./IMPLEMENTATION_GUIDE.md) - 各功能模块的实现细节
- 🏛️ [系统架构设计](./ARCHITECTURE.md) - 整体架构和技术选型
- 📋 [产品需求文档](./PRODUCT_REQUIREMENTS.md) - 详细的功能需求
- 🚀 [开发指南](./DEVELOPMENT.md) - 开发规范和最佳实践
- 🤝 [贡献指南](./CONTRIBUTING.md) - 如何为项目做贡献
- ❓ [常见问题](./FAQ.md) - 常见问题解答
- 📊 [完成总结](./PROJECT_COMPLETION_SUMMARY.md) - 项目完成情况总结

## 💡 产品理念 / Product Philosophy

### 🎯 目标用户
- 16-30岁的青年人
- 面临数字过度使用困扰的群体
- 希望提高生活质量和工作效率的用户

### 🌟 设计原则
1. **非侵入性** - 尊重用户自主权，提供建议而非强制
2. **科学方法** - 基于心理学和行为科学的干预策略
3. **隐私保护** - 用户数据本地优先，支持匿名模式
4. **正向激励** - 通过奖励和成就鼓励健康行为
5. **循序渐进** - 支持用户按自己的节奏改变习惯

### 💎 核心价值
- 🎯 **重拾掌控** - 帮助用户掌控时间和生活
- 🌱 **健康成长** - 培养可持续的数字使用习惯
- 🤝 **社区支持** - 通过社区互相鼓励
- 📊 **数据驱动** - 用数据了解行为模式
- 🎨 **全面发展** - 鼓励线下活动和多元兴趣

## 🗺️ 开发路线图 / Roadmap

### ✅ Phase 1: MVP (已完成 / Completed)
- [x] 项目架构设计
- [x] Monorepo 搭建
- [x] Web 应用基础框架
- [x] API 服务器架构
- [x] PWA 功能实现
- [x] 核心页面开发
- [x] 数据可视化
- [x] 类型系统完善
- [x] 文档编写

### 🔄 Phase 2: 数据持久化 (进行中 / In Progress)
- [ ] PostgreSQL 数据库集成
- [ ] MongoDB 时序数据存储
- [ ] Redis 缓存实现
- [ ] 真实数据流转
- [ ] 用户认证完善
- [ ] 数据同步机制

### 📋 Phase 3: 高级功能 (计划中 / Planned)
- [ ] WebSocket 实时通信
- [ ] 推送通知集成
- [ ] AI 推荐算法
- [ ] 行为预测模型
- [ ] 情绪检测 NLP
- [ ] 测试覆盖

### 🚀 Phase 4: 平台扩展 (未来 / Future)
- [ ] React Native 移动应用
- [ ] Electron 桌面应用
- [ ] Chrome/Firefox 浏览器插件
- [ ] 第三方集成
- [ ] 企业版功能

详细路线图请查看 [ROADMAP.md](./ROADMAP.md)

## 🤝 贡献指南 / Contributing

我们欢迎所有形式的贡献！

### 如何贡献
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

详细说明请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)

### 开发者
- 感谢所有为数字健康和心理健康领域做出贡献的研究者、开发者和用户
- 本项目使用 GitHub Copilot 辅助开发

## 📄 许可证 / License

本项目采用 MIT 许可证 - 详见 [LICENSE](./LICENSE) 文件

## 📞 联系我们 / Contact

- 🏠 项目主页: https://github.com/Shy-06/Unplug
- 🐛 问题反馈: https://github.com/Shy-06/Unplug/issues
- 💬 讨论区: https://github.com/Shy-06/Unplug/discussions
- 📧 邮件: support@unplug.app

## 🌟 Star History

如果这个项目对你有帮助，请给我们一个 Star ⭐

## 📊 项目状态 / Project Status

- ✅ MVP 已完成
- 🔄 持续开发中
- 📱 Web 版本可用
- 🚀 移动版本开发中

## ⚠️ 免责声明 / Disclaimer

本应用旨在帮助用户建立健康的数字使用习惯。如果您有严重的网络成瘾问题，建议寻求专业医疗帮助。

This application is designed to help users establish healthy digital usage habits. If you have serious internet addiction issues, please seek professional medical help.

---

<div align="center">

**记住：科技应该服务于生活，而不是主宰生活。**

**Remember: Technology should serve life, not dominate it.**

Made with ❤️ by the Unplug Team

</div>
