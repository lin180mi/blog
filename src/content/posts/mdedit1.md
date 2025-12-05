---
title: '保姆级教程：nvm安装'
published: 2025-11-13
draft: false
image: "https://image.987119.xyz/uploads/2025/12/FwAker-dkcgk.webp"
category: ["教学"]
tags: ["Tag"]
pinned: true
---

## 简介
NVM (Node Version Manager) 是一个用于管理多个 Node.js 版本的工具。它允许你在同一台计算机上安装和切换不同版本的 Node.js，非常适合需要在不同项目中使用不同 Node.js 版本的开发者。

### 为什么需要NVM？
* **多版本管理**：不同项目可能需要不同版本的 Node.js。
* **测试兼容性**：可以轻松测试应用在不同 Node.js 版本下的兼容性。
* **升级方便**：可以安全地尝试新版本，出现问题可以轻松回退。
* **避免权限问题**：解决了使用 sudo 安装全局包的权限问题。

---

## Windows 系统安装 NVM

### 前置条件
* Windows 7/8/10/11 操作系统
* 管理员权限

### 安装步骤
1.  **下载安装包**
    * 访问 [NVM for Windows 的 GitHub Releases 页面](https://github.com/coreybutler/nvm-windows/releases)，下载最新版本的 `nvm-setup.exe` 安装文件。
2.  **运行安装程序**
    * 双击下载的 `nvm-setup.exe` 文件。
    * 如果出现安全警告，点击“是”继续。
3.  **安装向导**
    * 按照提示点击 "Next"，阅读并接受许可协议。
    * 选择安装位置（建议使用默认路径）。
    * 选择 Node.js 存储位置（建议使用默认路径）。
    * 点击 "Install" 开始安装。
4.  **验证安装**
    . 安装完成后，打开命令提示符（CMD）或 PowerShell。
    . 输入以下命令验证 NVM 是否安装成功：
      ```cmd
      nvm version
      ```
    * 如果显示版本号，则表示安装成功。

### 环境变量配置
NVM 安装程序通常会自动配置必要的环境变量。如果遇到 `'nvm' 不是内部或外部命令` 的错误，请手动添加环境变量：
1.  右键点击“此电脑” -> “属性” -> “高级系统设置” -> “环境变量”。
2.  在“系统变量”部分，找到并编辑 `Path` 变量。
3.  添加 NVM 安装路径（通常是 `C:\Users\[用户名]\AppData\Roaming\nvm`）。
4.  点击“确定”保存更改。

---

## macOS/Linux 系统安装 NVM

### 前置条件
* macOS 或 Linux 操作系统
* curl 或 wget 工具（大多数系统默认已安装）

### 安装步骤
1.  **使用 curl 或 wget 安装**
    打开终端，执行以下任一命令：
    * **使用 curl:**
      ```bash
      curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh) | bash
      ```
    * **使用 wget:**
      ```bash
      wget -qO- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh) | bash
      ```

2.  **更新环境变量**
    安装脚本会尝试将以下内容添加到您的配置文件（如 `~/.bash_profile`, `~/.zshrc`, `~/.bashrc` 等）：
    ```bash
    export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
    ```
    
    你需要重新加载配置文件使生效：
    ```bash
    source ~/.bashrc  # 或 source ~/.zshrc 如果使用zsh
    ```

3.  **验证安装**
    在终端中输入：
    ```bash
    nvm --version
    ```
    如果显示版本号，则表示安装成功。

---

## 基本使用命令

### 查看与安装
* **查看可用命令**: `nvm help`
* **查看可安装版本**:
    * macOS/Linux: `nvm ls-remote`
    * Windows: `nvm list available`
* **安装特定版本**:
    ```bash
    nvm install 16.14.0  # 安装指定版本
    nvm install 16       # 安装主版本号为16的最新版本
    nvm install lts      # 安装最新的LTS（长期支持）版本
    nvm install latest   # 安装最新版本
    ```
* **查看已安装版本**: `nvm ls`

### 切换与管理
* **切换 Node.js 版本**:
    ```bash
    nvm use 16.14.0  # 使用指定版本
    nvm use 16       # 使用主版本号为16的已安装版本
    nvm use lts      # 使用已安装的最新LTS版本
    nvm use latest   # 使用已安装的最新版本
    ```
* **设置默认版本**: `nvm alias default 16.14.0`
* **卸载版本**: `nvm uninstall 16.14.0`

---

## 实用技巧：使用镜像加速下载

在中国大陆地区，可以使用淘宝镜像加速 Node.js 的下载。

### Windows
1.  打开 NVM 安装目录下的 `settings.txt` 文件（通常在 `C:\Users\[用户名]\AppData\Roaming\nvm`）。
2.  添加以下内容：
    ```text
    node_mirror: [https://npm.taobao.org/mirrors/node/](https://npm.taobao.org/mirrors/node/)
    npm_mirror: [https://npm.taobao.org/mirrors/npm/](https://npm.taobao.org/mirrors/npm/)
    ```

### macOS/Linux
1.  编辑 `~/.bashrc` 或 `~/.zshrc` 文件。
2.  添加以下内容：
    ```bash
    export NVM_NODEJS_ORG_MIRROR=[https://npm.taobao.org/mirrors/node](https://npm.taobao.org/mirrors/node)
    export NVM_NPM_MIRROR=[https://npm.taobao.org/mirrors/npm](https://npm.taobao.org/mirrors/npm)
    ```
3.  重新加载配置：`source ~/.bashrc`

---

## 常见问题解决

### Windows 系统问题
* **问题：安装后找不到 nvm 命令**
    * **解决方案**：确保 NVM 已正确安装；检查环境变量 `Path` 是否正确设置；重启命令提示符或计算机。
* **问题：安装 Node.js 时出现网络错误**
    * **解决方案**：检查网络连接；配置镜像源（见上文“使用镜像加速下载”）；尝试使用管理员权限运行命令提示符。
* **问题：切换版本后 npm 命令不可用**
    * **解决方案**：
        1. 重新安装该版本的 Node.js (`nvm uninstall <版本号>` 然后 `nvm install <版本号>`)。
        2. 或者手动安装 npm (`nvm use <版本号>` 后运行 `npm install -g npm`)。

### macOS/Linux 系统问题
* **问题：安装后终端重启 nvm 命令消失**
    * **解决方案**：手动将 NVM 初始化脚本添加到 `~/.bashrc` 或 `~/.zshrc` 中：
      ```bash
      export NVM_DIR="$HOME/.nvm"
      [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
      [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
      ```
* **问题：nvm 命令执行缓慢**
    * **解决方案**：禁用自动补全功能，在配置文件中添加：
      ```bash
      export NVM_COMPLETION=false
      ```
