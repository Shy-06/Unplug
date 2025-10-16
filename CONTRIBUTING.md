# 贡献指南 / Contributing Guide

感谢您对 Unplug 项目的关注！我们欢迎各种形式的贡献。

Thank you for your interest in contributing to Unplug! We welcome all forms of contributions.

## 如何贡献 / How to Contribute

### 报告问题 / Reporting Issues

如果您发现了 bug 或有功能建议：
If you find a bug or have a feature suggestion:

1. 在提交前搜索现有的 issues，避免重复
   Search existing issues to avoid duplicates
2. 使用清晰的标题和详细的描述
   Use a clear title and detailed description
3. 如果是 bug，请提供复现步骤
   For bugs, provide steps to reproduce
4. 附上您的环境信息（操作系统、浏览器版本等）
   Include your environment details (OS, browser version, etc.)

### 提交代码 / Submitting Code

1. **Fork 本仓库 / Fork the repository**
   
2. **创建功能分支 / Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **编写代码 / Write your code**
   - 遵循现有的代码风格
   - 添加必要的注释
   - 确保代码通过所有测试
   
4. **提交更改 / Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
   
   提交信息格式 / Commit message format:
   - `feat:` 新功能
   - `fix:` 修复bug
   - `docs:` 文档更新
   - `style:` 代码格式调整
   - `refactor:` 代码重构
   - `test:` 测试相关
   - `chore:` 构建或辅助工具变动

5. **推送到您的分支 / Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **创建 Pull Request / Create a Pull Request**
   - 提供清晰的PR描述
   - 说明您的更改解决了什么问题
   - 引用相关的 issue 编号

## 代码规范 / Code Standards

### JavaScript/TypeScript
- 使用 ESLint 和 Prettier
- 遵循 Airbnb 风格指南
- 使用有意义的变量名
- 添加适当的注释

### 提交前检查 / Pre-commit Checklist
- [ ] 代码通过 linting
- [ ] 所有测试通过
- [ ] 添加了新功能的测试
- [ ] 更新了相关文档
- [ ] 没有遗留 console.log 或调试代码

## 开发环境设置 / Development Setup

```bash
# 克隆您 fork 的仓库
git clone https://github.com/YOUR_USERNAME/Unplug.git

# 安装依赖
npm install

# 运行开发服务器
npm run dev

# 运行测试
npm test

# 运行 linter
npm run lint
```

## 行为准则 / Code of Conduct

### 我们的承诺 / Our Pledge

为了营造一个开放和友好的环境，我们承诺：
To foster an open and welcoming environment, we pledge to:

- 尊重不同的观点和经历
- 接受建设性的批评
- 关注对社区最有利的事情
- 对其他社区成员表示同理心

### 不可接受的行为 / Unacceptable Behavior

- 使用性暗示的语言或图像
- 人身攻击或侮辱性评论
- 公开或私下的骚扰
- 未经许可发布他人的私人信息
- 其他不道德或不专业的行为

## 问题解答 / Getting Help

如果您有任何问题：
If you have any questions:

- 查看项目文档
- 搜索现有的 issues
- 在 Discussions 区发起讨论
- 通过 email 联系维护者

## 许可证 / License

通过贡献代码，您同意您的贡献将在 MIT 许可证下发布。

By contributing, you agree that your contributions will be licensed under the MIT License.

---

再次感谢您的贡献！ / Thank you again for your contribution!
