#!/usr/bin/env node

/**
 * 检查开发环境要求
 * Check development environment requirements
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for better output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

// Helper functions
const log = (msg, color = 'reset') => console.log(`${colors[color]}${msg}${colors.reset}`);
const success = (msg) => log(`✓ ${msg}`, 'green');
const warning = (msg) => log(`⚠ ${msg}`, 'yellow');
const error = (msg) => log(`✗ ${msg}`, 'red');
const info = (msg) => log(`ℹ ${msg}`, 'cyan');
const section = (msg) => log(`\n${msg}`, 'bright');

// Check if a command exists
function commandExists(cmd) {
  try {
    execSync(`which ${cmd}`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Get version of a command
function getVersion(cmd, args = '--version') {
  try {
    const output = execSync(`${cmd} ${args}`, { encoding: 'utf8', stdio: 'pipe' });
    return output.trim().split('\n')[0];
  } catch {
    return null;
  }
}

// Compare version strings
function compareVersions(version, required) {
  const v1 = version.split('.').map(Number);
  const v2 = required.split('.').map(Number);
  
  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const num1 = v1[i] || 0;
    const num2 = v2[i] || 0;
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
}

// Extract version number from version string
function extractVersion(versionStr) {
  const match = versionStr.match(/(\d+\.\d+(?:\.\d+)?)/);
  return match ? match[1] : null;
}

// Main check function
async function checkRequirements() {
  log('\n╔════════════════════════════════════════════════════════╗', 'cyan');
  log('║  Unplug - Development Environment Check 环境检查        ║', 'cyan');
  log('╚════════════════════════════════════════════════════════╝', 'cyan');

  let allChecksPassed = true;
  const issues = [];

  // Check Node.js
  section('📦 Checking Node.js...');
  if (commandExists('node')) {
    const nodeVersion = getVersion('node');
    const version = extractVersion(nodeVersion);
    if (version && compareVersions(version, '18.0.0') >= 0) {
      success(`Node.js: ${nodeVersion}`);
    } else {
      error(`Node.js version ${version} is too old. Required: >= 18.0.0`);
      issues.push('升级 Node.js 到 18.0.0 或更高版本 / Upgrade Node.js to 18.0.0 or higher');
      allChecksPassed = false;
    }
  } else {
    error('Node.js is not installed');
    issues.push('安装 Node.js (https://nodejs.org) / Install Node.js (https://nodejs.org)');
    allChecksPassed = false;
  }

  // Check npm
  section('📦 Checking npm...');
  if (commandExists('npm')) {
    const npmVersion = getVersion('npm');
    const version = extractVersion(npmVersion);
    if (version && compareVersions(version, '6.0.0') >= 0) {
      success(`npm: ${npmVersion}`);
    } else {
      warning(`npm version ${version} might be too old. Recommended: >= 6.0.0`);
    }
  } else {
    error('npm is not installed');
    issues.push('安装 npm / Install npm');
    allChecksPassed = false;
  }

  // Check Git
  section('📦 Checking Git...');
  if (commandExists('git')) {
    const gitVersion = getVersion('git');
    success(`Git: ${gitVersion}`);
  } else {
    error('Git is not installed');
    issues.push('安装 Git (https://git-scm.com) / Install Git (https://git-scm.com)');
    allChecksPassed = false;
  }

  // Check optional tools
  section('🔧 Checking optional tools...');
  
  if (commandExists('docker')) {
    const dockerVersion = getVersion('docker');
    success(`Docker: ${dockerVersion}`);
  } else {
    info('Docker is not installed (optional for development)');
  }

  if (commandExists('yarn')) {
    const yarnVersion = getVersion('yarn');
    success(`Yarn: ${yarnVersion} (alternative to npm)`);
  } else {
    info('Yarn is not installed (optional alternative to npm)');
  }

  // Check project files
  section('📁 Checking project structure...');
  const requiredFiles = [
    'package.json',
    'README.md',
    'LICENSE',
    '.gitignore',
  ];

  for (const file of requiredFiles) {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      success(`Found: ${file}`);
    } else {
      warning(`Missing: ${file}`);
    }
  }

  // Summary
  section('📊 Summary 总结');
  if (allChecksPassed) {
    success('All required checks passed! 所有必需检查已通过！');
    info('\nNext steps 下一步:');
    info('1. npm install - Install dependencies 安装依赖');
    info('2. npm run dev - Start development server 启动开发服务器');
  } else {
    error('Some checks failed. Please fix the issues below:');
    error('部分检查失败。请修复以下问题：\n');
    issues.forEach((issue, index) => {
      log(`  ${index + 1}. ${issue}`, 'red');
    });
  }

  log('\n' + '═'.repeat(60) + '\n', 'cyan');

  // Return exit code
  return allChecksPassed ? 0 : 1;
}

// Run checks
checkRequirements()
  .then(exitCode => process.exit(exitCode))
  .catch(err => {
    error(`Error during checks: ${err.message}`);
    process.exit(1);
  });
