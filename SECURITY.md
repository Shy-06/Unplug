# 安全政策 / Security Policy

## 支持的版本 / Supported Versions

我们目前支持以下版本的安全更新：

We currently support the following versions with security updates:

| 版本 Version | 支持状态 Supported     |
| ------------ | --------------------- |
| 0.1.x (MVP)  | :white_check_mark:    |
| < 0.1        | :x:                   |

## 报告漏洞 / Reporting a Vulnerability

### 如何报告 / How to Report

**请不要在公开的 GitHub Issues 中报告安全漏洞。**

**Please do not report security vulnerabilities through public GitHub issues.**

如果您发现了安全漏洞，请通过以下方式之一报告：

If you discover a security vulnerability, please report it via one of the following methods:

1. **电子邮件 / Email**: security@unplug.app
2. **加密邮件 / Encrypted Email**: 使用我们的 PGP 密钥（见下文）

### 报告应包含的信息 / Information to Include

请在您的报告中包含以下信息：

Please include the following information in your report:

- 漏洞类型（如 XSS、SQL 注入、权限提升等）
  Type of vulnerability (e.g., XSS, SQL injection, privilege escalation)
  
- 受影响的组件和版本
  Affected components and versions
  
- 重现步骤的详细说明
  Detailed steps to reproduce the issue
  
- 潜在影响的评估
  Assessment of potential impact
  
- 建议的修复方案（如果有）
  Suggested fix (if any)
  
- 您的联系信息
  Your contact information

### 响应时间 / Response Timeline

我们承诺：

We commit to:

- **24小时内 / Within 24 hours**: 确认收到您的报告
  Acknowledge receipt of your report
  
- **3个工作日内 / Within 3 business days**: 提供初步评估和预计修复时间
  Provide initial assessment and estimated fix timeline
  
- **7-30天内 / Within 7-30 days**: 发布安全补丁（取决于严重性）
  Release security patch (depending on severity)

### 严重性分类 / Severity Classification

我们使用 CVSS v3.1 评分系统对漏洞进行分类：

We classify vulnerabilities using the CVSS v3.1 scoring system:

| 评分 Score | 级别 Severity | 响应时间 Response Time |
|-----------|---------------|----------------------|
| 9.0-10.0  | 严重 Critical | 24-48 小时 hours    |
| 7.0-8.9   | 高 High       | 3-7 天 days         |
| 4.0-6.9   | 中 Medium     | 7-30 天 days        |
| 0.1-3.9   | 低 Low        | 30-90 天 days       |

### 奖励计划 / Bug Bounty Program

目前我们还没有正式的漏洞赏金计划，但我们会：

While we don't currently have a formal bug bounty program, we will:

- 在致谢页面公开感谢负责任的披露者（如果您愿意）
  Publicly acknowledge responsible disclosers in our acknowledgments page (if you wish)
  
- 为重大漏洞的发现者提供特别感谢
  Provide special thanks for significant vulnerability discoveries
  
- 未来可能建立正式的奖励计划
  May establish a formal reward program in the future

## 安全最佳实践 / Security Best Practices

### 用户安全建议 / For Users

1. **保持更新 / Keep Updated**
   - 始终使用最新版本的应用
     Always use the latest version of the application
   - 启用自动更新
     Enable automatic updates

2. **密码安全 / Password Security**
   - 使用强密码（至少12个字符，包含大小写字母、数字和符号）
     Use strong passwords (at least 12 characters with mix of cases, numbers, and symbols)
   - 不要重复使用密码
     Don't reuse passwords
   - 启用双因素认证（2FA）
     Enable two-factor authentication (2FA)

3. **数据保护 / Data Protection**
   - 定期备份您的数据
     Regularly backup your data
   - 启用端到端加密
     Enable end-to-end encryption
   - 审查应用权限
     Review app permissions

4. **警惕钓鱼 / Beware of Phishing**
   - 验证官方通信来源
     Verify official communication sources
   - 不要点击可疑链接
     Don't click suspicious links
   - 官方域名：unplug.app
     Official domain: unplug.app

### 开发者安全建议 / For Developers

1. **代码审查 / Code Review**
   - 所有代码必须经过审查
     All code must be reviewed
   - 使用静态代码分析工具
     Use static code analysis tools
   - 关注 OWASP Top 10
     Focus on OWASP Top 10

2. **依赖管理 / Dependency Management**
   - 定期更新依赖
     Regularly update dependencies
   - 使用 `npm audit` / `yarn audit`
     Use `npm audit` / `yarn audit`
   - 避免使用过时或有安全问题的包
     Avoid outdated or vulnerable packages

3. **敏感信息 / Sensitive Information**
   - 永远不要提交密钥、密码或令牌
     Never commit keys, passwords, or tokens
   - 使用环境变量
     Use environment variables
   - 使用 `.gitignore` 排除敏感文件
     Use `.gitignore` to exclude sensitive files

4. **安全测试 / Security Testing**
   - 编写安全测试用例
     Write security test cases
   - 进行渗透测试
     Conduct penetration testing
   - 使用自动化安全扫描
     Use automated security scanning

## 已知安全功能 / Known Security Features

### 数据加密 / Data Encryption

- **传输加密 / Encryption in Transit**: 
  - 所有 API 通信使用 HTTPS/TLS 1.3
    All API communications use HTTPS/TLS 1.3
  
- **存储加密 / Encryption at Rest**:
  - 敏感用户数据使用 AES-256 加密
    Sensitive user data encrypted with AES-256
  - 端到端加密选项
    End-to-end encryption option

### 认证与授权 / Authentication & Authorization

- JWT 令牌认证
  JWT token authentication
  
- 基于角色的访问控制 (RBAC)
  Role-Based Access Control (RBAC)
  
- 双因素认证 (2FA) 支持
  Two-Factor Authentication (2FA) support
  
- 会话管理和过期控制
  Session management and expiration

### 数据隐私 / Data Privacy

- 最小化数据收集
  Minimal data collection
  
- 用户数据可导出
  User data exportable
  
- 一键删除账号和数据
  One-click account and data deletion
  
- GDPR 和 CCPA 合规
  GDPR and CCPA compliant

### 安全监控 / Security Monitoring

- 实时威胁检测
  Real-time threat detection
  
- 异常活动警报
  Anomalous activity alerts
  
- 安全日志记录
  Security logging
  
- 定期安全审计
  Regular security audits

## 安全更新历史 / Security Update History

### 2025-01-16 - 初始安全政策发布
### 2025-01-16 - Initial Security Policy Released

- 建立安全报告流程
  Established security reporting process
  
- 定义严重性分类
  Defined severity classification
  
- 制定响应时间承诺
  Created response time commitments

## PGP 公钥 / PGP Public Key

用于加密安全报告的 PGP 公钥将在项目正式启动后发布。

PGP public key for encrypting security reports will be published after official project launch.

```
# 待更新 / To be updated
```

## 合规性 / Compliance

Unplug 致力于遵守以下安全和隐私标准：

Unplug is committed to complying with the following security and privacy standards:

- **GDPR** (通用数据保护条例 / General Data Protection Regulation)
- **CCPA** (加州消费者隐私法 / California Consumer Privacy Act)
- **COPPA** (儿童在线隐私保护法 / Children's Online Privacy Protection Act)
- **OWASP** 安全最佳实践 / Security Best Practices
- **SOC 2** (计划中 / Planned)
- **ISO 27001** (计划中 / Planned)

## 安全团队 / Security Team

- **首席安全官 / Chief Security Officer**: security@unplug.app
- **安全团队 / Security Team**: team@unplug.app

## 第三方安全审计 / Third-party Security Audits

我们计划定期进行第三方安全审计，结果将在适当的时候公开。

We plan to conduct regular third-party security audits, and results will be published when appropriate.

## 致谢 / Acknowledgments

我们感谢以下安全研究人员的负责任披露：

We thank the following security researchers for responsible disclosure:

- 待更新 / To be updated

---

**安全是我们的首要任务。感谢您帮助保护 Unplug 和我们的用户。**

**Security is our top priority. Thank you for helping keep Unplug and our users safe.**

---

*最后更新 / Last Updated*: 2025-01-16
*下次审查 / Next Review*: 2025-04-16
