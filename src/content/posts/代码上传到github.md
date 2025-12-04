# 保姆级教程：如何将代码保存到 GitHub（从零开始）


---

本教程适合 **完全新手**，包含 **详细步骤**，确保你能成功上传代码到 GitHub。

---

## 📌 准备工作

1.  **注册 GitHub 账号**
     * 访问 GitHub 官网 → 点击 `Sign up` 注册。
    * 填写用户名、邮箱、密码 → 完成验证。

2.  **安装 Git（版本控制工具）**
    * **Windows**：下载 Git → 安装（全部默认选项）。
    * **Mac**：打开终端，运行：
        ```bash
        brew install git  # 如果没安装 Homebrew，先运行 /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
        ```

3.  **检查 Git 是否安装成功**
    打开终端（Windows 用 `Git Bash` 或 `CMD`），输入：
    ```bash
    git --version
    ```
    **✅ 成功示例**：显示类似 `git version 2.40.1` 的版本号。

---

## 🚀 第一步：在 GitHub 上创建仓库（Repository）

1.  **登录 GitHub** → 点击右上角 `+` → 选择 `New repository`。
2.  **填写仓库信息**：
    * **Repository name**：输入仓库名（如 `my-first-project`）。
    * **Description**（可选）：写点描述，比如 `这是我的第一个 GitHub 项目`。
    * **Public/Private**：
        * `Public`（公开，所有人都能看到）
        * `Private`（私有，仅自己或指定的人可见）
    * **Initialize this repository with**：
        * ☑️ `Add a README file`（推荐，创建一个介绍文件）
        * ☑️ `Add .gitignore`（可选，用于忽略不需要上传的文件，如 `node_modules`）
        * ☑️ `Choose a license`（可选，比如 MIT 许可证）
3.  **点击 `Create repository`**，你的仓库就建好了！

---

## 💻 第二步：把代码上传到 GitHub

#### 1. 打开终端（或 Git Bash）
进入你的项目文件夹

#### 2. 初始化 Git（仅第一次需要）
```bash
git init
```

#### 3. 添加文件到 Git 暂存区 (相当于购物将商品放入推车）
```bash
# 添加所有文件
git add . 
# 指定文件
git add index.html style.css script.js
```
*[span_0](start_span)(注：原文中使用 `//` 注释，但在 Git Bash 中建议使用 `#`)*[span_0](end_span)

#### 4. 提交更改（商品到前台结账买单）
```bash
git commit -m "第一次提交：上传初始代码"
```

#### 5. 关联 GitHub 远程仓库
复制你的 GitHub 仓库地址（HTTPS 或 SSH）：
* 进入你的 GitHub 仓库 → 复制你的 GitHub 仓库地址。

在终端运行：
```bash
git remote add origin [https://github.com/你的用户名/仓库名.git](https://github.com/你的用户名/仓库名.git)
# 例如：
git remote add origin [https://github.com/yourusername/my-first-project.git](https://github.com/yourusername/my-first-project.git)
```

#### 6. 推送代码到 GitHub
```bash
git push -u origin main  # 或 git push -u origin master
```

* 如果 GitHub 仓库是 `main` 分支，用 `main`；如果是 `master`，用 `master`。

✅ **成功上传！** 刷新 GitHub 页面，你的代码就出现了！

---

如果有其他问题，欢迎随时提问！ 😊

