# PWA 实现指南 / PWA Implementation Guide

## 概述 / Overview

Unplug 已经实现了完整的 Progressive Web App (PWA) 支持，使应用能够像原生应用一样安装和使用。

Unplug has implemented full Progressive Web App (PWA) support, allowing the application to be installed and used like a native app.

## PWA 功能特性 / PWA Features

### 1. 应用安装 / App Installation
- ✅ 可安装到主屏幕 / Installable to home screen
- ✅ 独立窗口运行 / Runs in standalone window
- ✅ 自定义图标和启动画面 / Custom icons and splash screen

### 2. 离线支持 / Offline Support
- ✅ Service Worker 缓存策略 / Service Worker caching
- ✅ 离线时可用 / Works offline
- ✅ 后台同步 / Background sync

### 3. 性能优化 / Performance Optimization
- ✅ 资源预缓存 / Asset pre-caching
- ✅ 运行时缓存 / Runtime caching
- ✅ 网络优先策略 / Network-first strategy for API calls

### 4. 用户体验 / User Experience
- ✅ 快速加载 / Fast loading
- ✅ 响应式设计 / Responsive design
- ✅ 原生应用体验 / Native-like experience

## 技术实现 / Technical Implementation

### Service Worker 配置

使用 `vite-plugin-pwa` 实现 Service Worker 自动生成和管理。

配置文件：`packages/web/vite.config.ts`

```typescript
VitePWA({
  registerType: 'autoUpdate',
  includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
  manifest: {
    name: 'Unplug - Reset Your Life',
    short_name: 'Unplug',
    description: '帮助青年人摆脱网瘾，重置生活状态',
    theme_color: '#4F46E5',
    background_color: '#ffffff',
    display: 'standalone',
    // ... more configuration
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/api\.unplug\.app\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api-cache',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 3600
          }
        }
      }
    ]
  }
})
```

### Manifest 配置

Web App Manifest 定义了应用的外观和行为：

- **name**: 应用全名
- **short_name**: 短名称（显示在主屏幕）
- **description**: 应用描述
- **theme_color**: 主题色（浏览器UI颜色）
- **background_color**: 启动画面背景色
- **display**: 显示模式（standalone = 独立应用）
- **icons**: 不同尺寸的应用图标

### 缓存策略 / Caching Strategies

#### 1. 静态资源缓存
所有 JS、CSS、HTML、图片等静态资源会被预缓存，确保离线可用。

#### 2. API 请求缓存
- **NetworkFirst**: API 请求优先从网络获取，网络失败时使用缓存
- **缓存时间**: 1小时
- **最大缓存条目**: 100条

#### 3. 图片资源缓存
- **CacheFirst**: 优先使用缓存，节省带宽
- **缓存时间**: 30天

## 使用指南 / Usage Guide

### 桌面端安装 / Desktop Installation

#### Chrome/Edge
1. 访问 https://unplug.app
2. 点击地址栏右侧的安装图标 ⊕
3. 点击"安装"确认

#### Firefox
1. 访问 https://unplug.app
2. 点击地址栏右侧的 ⋯ 菜单
3. 选择"添加到主屏幕"

### 移动端安装 / Mobile Installation

#### iOS (Safari)
1. 访问 https://unplug.app
2. 点击分享按钮 
3. 选择"添加到主屏幕"
4. 点击"添加"

#### Android (Chrome)
1. 访问 https://unplug.app
2. 点击菜单按钮 ⋮
3. 选择"添加到主屏幕"
4. 点击"添加"

### 离线使用 / Offline Usage

安装后，即使没有网络连接，应用仍然可以：
- 查看已缓存的数据
- 使用核心功能
- 记录使用数据（网络恢复后自动同步）

## 开发调试 / Development & Debugging

### 本地测试 PWA

```bash
# 1. 构建生产版本
cd packages/web
npm run build

# 2. 预览构建结果
npm run preview

# 3. 在浏览器中打开 http://localhost:4173
# 4. 打开开发者工具 > Application > Service Workers
```

### 检查 PWA 状态

使用 Chrome DevTools:
1. 打开 DevTools (F12)
2. 切换到 "Application" 标签
3. 查看：
   - Manifest: 检查 manifest.json 配置
   - Service Workers: 查看 SW 状态和缓存
   - Cache Storage: 查看缓存内容

### Lighthouse 审计

```bash
# 使用 Lighthouse 检查 PWA 分数
npm install -g lighthouse

lighthouse https://unplug.app --view
```

PWA 分数应该达到 90+ 分。

## PWA 最佳实践 / Best Practices

### 1. 图标尺寸 / Icon Sizes
确保提供以下尺寸的图标：
- 192x192 (必需)
- 512x512 (必需)
- 144x144, 256x256 (推荐)

### 2. 离线页面 / Offline Page
提供友好的离线提示页面。

### 3. 更新提示 / Update Prompt
当有新版本时提示用户刷新。

### 4. 性能优化 / Performance
- 延迟加载非关键资源
- 使用 CDN 加速静态资源
- 压缩图片和资源

### 5. 安全性 / Security
- 必须使用 HTTPS
- 配置 Content Security Policy
- 定期更新依赖包

## 常见问题 / FAQ

### Q: PWA 和原生应用有什么区别？
A: PWA 通过浏览器运行，无需应用商店下载，但体验接近原生应用。主要优势是跨平台、更新方便、不占用太多存储空间。

### Q: 如何更新 PWA？
A: Service Worker 会自动检测更新。用户刷新页面时会下载新版本。

### Q: PWA 能访问设备功能吗？
A: 可以访问大部分功能：通知、相机、地理位置、传感器等。部分高级功能可能受限。

### Q: PWA 的浏览器兼容性如何？
A: 主流浏览器都支持：Chrome、Edge、Safari、Firefox。iOS Safari 对某些功能支持有限。

## 性能指标 / Performance Metrics

### 目标指标 / Target Metrics
- **首次内容绘制 (FCP)**: < 1.8s
- **最大内容绘制 (LCP)**: < 2.5s
- **首次输入延迟 (FID)**: < 100ms
- **累积布局偏移 (CLS)**: < 0.1

### Lighthouse 分数目标
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+
- **PWA: 100**

## 进一步优化 / Further Optimization

### 1. 代码分割
使用动态 import() 分割代码：
```javascript
const Dashboard = lazy(() => import('./pages/Dashboard'));
```

### 2. 图片优化
- 使用 WebP 格式
- 实现图片懒加载
- 使用响应式图片

### 3. 预加载关键资源
```html
<link rel="preload" href="/critical.css" as="style">
<link rel="preconnect" href="https://api.unplug.app">
```

### 4. 启用 Gzip/Brotli 压缩
在服务器配置中启用压缩。

## 部署检查清单 / Deployment Checklist

- [ ] HTTPS 已配置
- [ ] manifest.json 正确配置
- [ ] Service Worker 正常注册
- [ ] 图标文件齐全 (192x192, 512x512)
- [ ] theme_color 和 background_color 已设置
- [ ] 离线功能测试通过
- [ ] Lighthouse PWA 分数 = 100
- [ ] 在多个设备和浏览器测试
- [ ] 应用可以成功安装
- [ ] 更新机制正常工作

## 参考资源 / References

- [PWA 官方文档](https://web.dev/progressive-web-apps/)
- [Workbox 文档](https://developers.google.com/web/tools/workbox)
- [vite-plugin-pwa](https://vite-pwa-org.netlify.app/)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)

---

*最后更新: 2025-01-16*
