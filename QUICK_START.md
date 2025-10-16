# 快速开始 / Quick Start Guide

欢迎来到 Unplug 项目！本指南将帮助您在 5 分钟内了解项目并开始使用。

Welcome to Unplug! This guide will help you understand the project and get started in 5 minutes.

## 🎯 项目简介 / Project Overview

**Unplug** 是一款数字健康管理应用，帮助青年人（18-35岁）摆脱网瘾，重新掌控生活。

**Unplug** is a digital wellness app helping young adults (18-35) overcome internet addiction and regain control of their lives.

### 核心功能 / Core Features
- 📊 使用时间监控 / Usage tracking
- 📈 数据可视化 / Data visualization
- ⏰ 智能提醒 / Smart reminders
- 🎯 专注模式 / Focus mode
- 🎖️ 目标管理 / Goal tracking
- 🤝 社区支持 / Community support

## 🚀 5分钟快速开始 / 5-Minute Quick Start

### 第一步：克隆项目 / Step 1: Clone the Project

```bash
git clone https://github.com/Shy-06/Unplug.git
cd Unplug
```

### 第二步：检查环境 / Step 2: Check Environment

```bash
node scripts/check-requirements.js
```

这将检查：
This will check:
- ✅ Node.js (>= 14.0.0)
- ✅ npm (>= 6.0.0)
- ✅ Git
- ✅ 项目文件结构 / Project structure

### 第三步：安装依赖 / Step 3: Install Dependencies

```bash
npm install
```

### 第四步：开始开发 / Step 4: Start Development

> ⚠️ **注意 / Note:**  
> 如果 `packages` 目录及其子目录（如 `web`、`server`、`mobile`）尚未创建，请先运行以下命令进行初始化：  
> If the `packages` directory and its subdirectories (such as `web`, `server`, `mobile`) do not exist yet, please scaffold them first:
>
> ```bash
> mkdir -p packages/web packages/server packages/mobile
> ```
```bash
# 启动所有服务 / Start all services
npm run dev

# 或者单独启动 / Or start individually:
npm run dev:web      # Web应用 / Web app
npm run dev:server   # 后端服务 / Backend
npm run dev:mobile   # 移动应用 / Mobile app
```

## 📚 接下来做什么？ / What's Next?

### 对于用户 / For Users
1. 📖 阅读 [用户指南](USER_GUIDE.md) 了解如何使用
2. ❓ 查看 [FAQ](FAQ.md) 解答常见问题
3. 💬 加入社区讨论

### 对于开发者 / For Developers
1. 📖 阅读 [开发指南](DEVELOPMENT.md) 设置开发环境
2. 🏗️ 查看 [架构文档](ARCHITECTURE.md) 了解系统设计
3. 🤝 阅读 [贡献指南](CONTRIBUTING.md) 参与贡献
4. 🗺️ 查看 [产品路线图](ROADMAP.md) 了解发展计划

### 对于产品经理 / For Product Managers
1. 📋 阅读 [产品需求文档](PRODUCT_REQUIREMENTS.md)
2. 🗺️ 查看 [产品路线图](ROADMAP.md)
3. 📊 了解成功指标和 KPI

## 📁 项目结构 / Project Structure

```
Unplug/
├── 📚 文档 / Documentation
│   ├── README.md              # 项目主页 / Main page
│   ├── QUICK_START.md         # 快速开始 / This file
│   ├── USER_GUIDE.md          # 用户指南 / User guide
│   ├── DEVELOPMENT.md         # 开发指南 / Dev guide
│   ├── ARCHITECTURE.md        # 架构文档 / Architecture
│   ├── PRODUCT_REQUIREMENTS.md # 需求文档 / PRD
│   ├── ROADMAP.md             # 路线图 / Roadmap
│   ├── FAQ.md                 # 常见问题 / FAQ
│   └── PROJECT_SUMMARY.md     # 项目总结 / Summary
│
├── 🔒 政策 / Policies
│   ├── CONTRIBUTING.md        # 贡献指南 / Contributing
│   ├── CODE_OF_CONDUCT.md     # 行为准则 / Conduct
│   ├── SECURITY.md            # 安全政策 / Security
│   └── LICENSE                # 许可证 / License
│
├── 🛠️ 配置 / Configuration
│   ├── package.json           # 项目配置 / Config
│   ├── .gitignore             # Git忽略 / Git ignore
│   └── CHANGELOG.md           # 更新日志 / Changelog
│
├── 📋 模板 / Templates
│   └── .github/
│       ├── ISSUE_TEMPLATE/    # Issue模板
│       └── PULL_REQUEST_TEMPLATE/ # PR模板
│
└── 🔧 脚本 / Scripts
    └── scripts/
        └── check-requirements.js  # 环境检查
```

## 🎯 当前状态 / Current Status

**项目阶段 / Phase**: 📝 文档完成 → 🚀 准备开发
**版本 / Version**: 0.1.0
**下个里程碑 / Next Milestone**: MVP 开发

## 💡 快速链接 / Quick Links

### 文档 / Documentation
- 🏠 [项目主页](README.md)
- 📖 [用户指南](USER_GUIDE.md)
- 👨‍💻 [开发指南](DEVELOPMENT.md)
- ❓ [常见问题](FAQ.md)

### 开发资源 / Development
- 🏗️ [系统架构](ARCHITECTURE.md)
- 📋 [产品需求](PRODUCT_REQUIREMENTS.md)
- 🗺️ [产品路线图](ROADMAP.md)
- 🤝 [贡献指南](CONTRIBUTING.md)

### 政策 / Policies
- 📜 [行为准则](CODE_OF_CONDUCT.md)
- 🔒 [安全政策](SECURITY.md)
- ⚖️ [开源许可](LICENSE)

### 外部链接 / External Links
- 📦 [GitHub 仓库](https://github.com/Shy-06/Unplug)
- 🐛 [问题追踪](https://github.com/Shy-06/Unplug/issues)
- 🌐 [官方网站](https://unplug.app) (计划中 / planned)

## 🆘 需要帮助？ / Need Help?

### 遇到问题？/ Having Issues?
1. 查看 [FAQ](FAQ.md)
2. 搜索 [GitHub Issues](https://github.com/Shy-06/Unplug/issues)
3. 创建新 Issue
4. 发送邮件至 support@unplug.app

### 想要贡献？/ Want to Contribute?
1. Fork 项目 / Fork the project
2. 阅读 [贡献指南](CONTRIBUTING.md)
3. 创建功能分支 / Create feature branch
4. 提交 Pull Request / Submit PR

### 有问题或建议？/ Questions or Suggestions?
- 💬 创建 Issue 讨论
- 📧 发送邮件：team@unplug.app
- 🐦 关注我们：@UnplugApp (计划中 / planned)

## 🎉 开始你的旅程 / Start Your Journey

现在你已经准备好了！选择你的角色：

Now you're ready! Choose your role:

### 👤 我是用户 / I'm a User
```bash
# 等待应用发布 / Wait for app release
# 目前处于开发阶段 / Currently in development
# 敬请期待！/ Stay tuned!
```

### 👨‍💻 我是开发者 / I'm a Developer
```bash
# 1. 设置环境 / Setup environment
npm install
node scripts/check-requirements.js

# 2. 开始开发 / Start developing
npm run dev

# 3. 运行测试 / Run tests
npm test

# 4. 查看文档 / Read docs
open DEVELOPMENT.md
```

### 📊 我是产品经理 / I'm a PM
```bash
# 阅读产品文档 / Read product docs
open PRODUCT_REQUIREMENTS.md
open ROADMAP.md
open PROJECT_SUMMARY.md
```

### 🎨 我是设计师 / I'm a Designer
```bash
# 查看产品需求和用户指南 / Check PRD and user guide
open PRODUCT_REQUIREMENTS.md
open USER_GUIDE.md

# 参考设计原则 / Refer to design principles
# 见 README.md 中的"设计原则"部分
# See "Design Principles" in README.md
```

## 📝 总结 / Summary

- ✅ **完整文档**：20个文档文件，55,000+字
- ✅ **双语支持**：中英文档完整对照
- ✅ **清晰架构**：微服务设计，易于理解
- ✅ **开源友好**：MIT 许可，欢迎贡献
- ✅ **隐私优先**：端到端加密，用户掌控

## 🌟 加入我们 / Join Us

一起构建帮助人们重新掌控生活的产品！

Let's build a product that helps people regain control of their lives!

**记住我们的使命 / Remember our mission**:
> "科技应该服务于生活，而不是主宰生活。"
> 
> "Technology should serve life, not dominate it."

---

**准备好了吗？让我们开始吧！🚀**

**Ready? Let's get started! 🚀**

---

*最后更新 / Last Updated*: 2025-01-16
