# 系统架构设计 / System Architecture Design

## 概述 / Overview

Unplug 采用现代化的微服务架构，支持多平台部署，确保高可用性、可扩展性和用户数据隐私安全。

Unplug adopts a modern microservices architecture supporting multi-platform deployment, ensuring high availability, scalability, and user data privacy security.

## 整体架构 / Overall Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     客户端层 / Client Layer                  │
├──────────────┬──────────────┬──────────────┬───────────────┤
│   Web App    │  Mobile App  │ Desktop App  │  Browser Ext  │
│   (React)    │(React Native)│  (Electron)  │               │
└──────────────┴──────────────┴──────────────┴───────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    API 网关层 / API Gateway                  │
│  - 路由管理 / Routing                                        │
│  - 身份验证 / Authentication                                 │
│  - 限流控制 / Rate Limiting                                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   服务层 / Service Layer                     │
├──────────────┬──────────────┬──────────────┬───────────────┤
│  用户服务    │  监控服务    │  分析服务    │  社区服务     │
│User Service  │Monitor Svc   │Analytics Svc │Community Svc  │
└──────────────┴──────────────┴──────────────┴───────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   数据层 / Data Layer                        │
├──────────────┬──────────────┬──────────────┬───────────────┤
│  PostgreSQL  │   MongoDB    │    Redis     │  File Storage │
│(关系型数据)  │  (时序数据)  │   (缓存)     │   (媒体文件)  │
└──────────────┴──────────────┴──────────────┴───────────────┘
```

## 核心模块 / Core Modules

### 1. 用户管理模块 / User Management Module

**职责 / Responsibilities:**
- 用户注册、登录、认证
- 用户画像管理
- 偏好设置
- 隐私控制

**技术栈 / Tech Stack:**
- Node.js + Express
- JWT for authentication
- bcrypt for password hashing
- PostgreSQL for user data

### 2. 使用监控模块 / Usage Monitoring Module

**职责 / Responsibilities:**
- 实时追踪应用使用时间
- 收集使用数据
- 本地数据存储和同步
- 隐私数据加密

**技术栈 / Tech Stack:**
- 客户端：原生 API（iOS ScreenTime, Android UsageStats）
- 后端：Node.js + MongoDB (时序数据库)
- 加密：AES-256 端到端加密

**数据模型 / Data Model:**
```javascript
UsageSession {
  userId: String,
  appName: String,
  startTime: Timestamp,
  endTime: Timestamp,
  duration: Number,
  category: String,
  deviceType: String,
  encrypted: Boolean
}
```

### 3. 智能提醒模块 / Smart Reminder Module

**职责 / Responsibilities:**
- 基于使用模式的智能提醒
- 自定义提醒规则
- 提醒历史记录
- 提醒效果分析

**技术栈 / Tech Stack:**
- Python + FastAPI (ML 模型服务)
- scikit-learn (行为模式识别)
- Redis (提醒队列)
- Push notification services

**智能算法 / Smart Algorithms:**
- 使用模式学习
- 最佳提醒时机预测
- 疲劳度检测
- 个性化提醒频率调整

### 4. 专注模式模块 / Focus Mode Module

**职责 / Responsibilities:**
- 番茄工作法计时器
- 应用屏蔽管理
- 白名单/黑名单配置
- 专注会话记录

**技术栈 / Tech Stack:**
- 客户端原生功能（屏幕时间API、应用限制）
- WebSocket (实时状态同步)
- Node.js backend

**功能特性 / Features:**
- 深度工作模式（25分钟专注 + 5分钟休息）
- 严格模式（无法提前结束）
- 灵活模式（可暂停）
- 紧急突破（需要输入理由）

### 5. 数据分析模块 / Data Analytics Module

**职责 / Responsibilities:**
- 使用趋势分析
- 行为模式识别
- 报告生成
- 可视化展示

**技术栈 / Tech Stack:**
- Python + Pandas (数据分析)
- D3.js / Chart.js (数据可视化)
- TensorFlow Lite (设备端ML)
- MongoDB Aggregation Pipeline

**分析维度 / Analysis Dimensions:**
- 每日/每周/每月使用统计
- 应用类别分布
- 高峰使用时段
- 使用习惯变化趋势
- 目标达成率

### 6. 社区互助模块 / Community Support Module

**职责 / Responsibilities:**
- 打卡功能
- 挑战系统
- 成就系统
- 社交互动

**技术栈 / Tech Stack:**
- Node.js + Express
- PostgreSQL (关系数据)
- Redis (排行榜)
- WebSocket (实时互动)

**社区功能 / Community Features:**
- 每日打卡
- 连续打卡记录
- 组队挑战
- 经验值和等级系统
- 徽章和成就
- 匿名分享

## 数据安全与隐私 / Data Security & Privacy

### 隐私保护原则 / Privacy Principles

1. **本地优先 / Local First**
   - 敏感数据优先存储在本地
   - 云端同步需要用户明确授权

2. **端到端加密 / End-to-End Encryption**
   - 使用 AES-256 加密用户数据
   - 密钥仅用户持有

3. **数据最小化 / Data Minimization**
   - 只收集必要的数据
   - 定期清理过期数据

4. **透明控制 / Transparent Control**
   - 用户可查看所有被收集的数据
   - 一键导出所有个人数据
   - 一键删除账号和所有数据

### 安全措施 / Security Measures

- HTTPS/TLS 加密传输
- JWT token 认证
- RBAC 权限控制
- SQL 注入防护
- XSS/CSRF 防护
- 定期安全审计

## 性能优化 / Performance Optimization

### 客户端优化 / Client-side Optimization
- 懒加载和代码分割
- 本地缓存策略
- 离线功能支持
- 渐进式 Web 应用（PWA）

### 服务端优化 / Server-side Optimization
- Redis 缓存热点数据
- CDN 加速静态资源
- 数据库索引优化
- 读写分离
- 水平扩展

### 监控与告警 / Monitoring & Alerting
- 应用性能监控（APM）
- 错误追踪（Sentry）
- 日志聚合（ELK Stack）
- 业务指标监控

## 部署架构 / Deployment Architecture

### 容器化部署 / Containerized Deployment
```
Docker Containers
├── nginx (反向代理)
├── api-gateway (API 网关)
├── user-service (用户服务)
├── monitor-service (监控服务)
├── analytics-service (分析服务)
├── community-service (社区服务)
└── ml-service (机器学习服务)
```

### 云原生 / Cloud Native
- Kubernetes 编排
- 自动扩缩容
- 灰度发布
- 多可用区部署

## 技术选型理由 / Technology Selection Rationale

### 前端框架选择
- **React**: 生态成熟，组件化，适合复杂交互
- **React Native**: 跨平台，代码复用率高
- **Electron**: 桌面端完整功能支持

### 后端框架选择
- **Node.js**: 高并发处理，JavaScript 全栈
- **Python**: 数据分析和机器学习生态丰富
- **FastAPI**: 高性能，自动文档生成

### 数据库选择
- **PostgreSQL**: 关系型数据，ACID 保证
- **MongoDB**: 时序数据，灵活 schema
- **Redis**: 高性能缓存，实时数据

## 扩展性设计 / Scalability Design

### 水平扩展 / Horizontal Scaling
- 无状态服务设计
- 负载均衡
- 分布式缓存
- 消息队列解耦

### 模块化设计 / Modular Design
- 微服务架构
- API 版本管理
- 插件系统
- 第三方集成接口

## 未来演进 / Future Evolution

### Phase 1: 基础功能 (0-6个月)
- 核心监控功能
- 基础分析报告
- 简单提醒系统

### Phase 2: 智能化 (6-12个月)
- AI 驱动的个性化建议
- 高级行为模式识别
- 预测性干预

### Phase 3: 生态化 (12-24个月)
- 开放 API
- 第三方应用集成
- 企业版功能
- 家长监护模式

---

*本文档会随着项目发展持续更新。*
*This document will be continuously updated as the project evolves.*
