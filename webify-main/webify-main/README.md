# Installation Guide for Node.js and Git

## Windows Installation

### Installing Node.js on Windows

1. Visit [Node.js official website](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the downloaded `.msi` installer
4. Follow the installation wizard:
   - Click "Next"
   - Accept the license terms
   - Choose the installation location (default is recommended)
   - Click "Next" on all default options
   - Click "Install"
5. Verify installation by opening Command Prompt and typing:
   ```bash
   node --version
   npm --version
   ```

### Installing Git on Windows

1. Visit [Git for Windows](https://git-scm.com/download/windows)
2. Download the latest version for Windows
3. Run the installer:
   - Click "Next"
   - Choose installation location (default is recommended)
   - Select components (default is recommended)
   - Choose default editor (e.g., Visual Studio Code if installed)
   - Choose default branch name (main is recommended)
   - Choose PATH environment (recommended: "Git from the command line and also from 3rd-party software")
   - Choose HTTPS transport backend (OpenSSL recommended)
   - Choose line ending conversions (recommended: "Checkout Windows-style, commit Unix-style")
   - Choose terminal emulator (Windows' default console window recommended)
   - Choose default 'git pull' behavior (recommended: "Fast-forward or merge")
   - Choose credential helper (Git Credential Manager recommended)
   - Enable file system caching (recommended)
4. Click "Install"
5. Verify installation by opening Command Prompt and typing:
   ```bash
   git --version
   ```

## macOS Installation

### Installing Node.js on macOS

Option 1: Using Homebrew (Recommended)

1. Open Terminal
2. Install Homebrew if not installed:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Install Node.js:
   ```bash
   brew install node
   ```
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

Option 2: Direct Download

1. Visit [Node.js official website](https://nodejs.org/)
2. Download the macOS LTS installer (.pkg file)
3. Run the installer package
4. Follow the installation wizard
5. Verify installation using the commands above

### Installing Git on macOS

Option 1: Using Homebrew (Recommended)

1. Open Terminal
2. Install Git:
   ```bash
   brew install git
   ```
3. Verify installation:
   ```bash
   git --version
   ```

Option 2: Using Xcode Command Line Tools

1. Open Terminal
2. Run:
   ```bash
   xcode-select --install
   ```
3. Follow the installation prompt
4. Verify installation:
   ```bash
   git --version
   ```

## Post-Installation Setup

### Configure Git (Both Windows and macOS)

1. Set your username:
   ```bash
   git config --global user.name "Your Name"
   ```
2. Set your email:
   ```bash
   git config --global user.email "your.email@example.com"
   ```

### Verify Everything is Working

1. For Node.js:
   ```bash
   node --version  # Should show v18.x.x or higher
   npm --version   # Should show 9.x.x or higher
   ```
2. For Git:
   ```bash
   git --version   # Should show 2.x.x or higher
   ```

## Troubleshooting

### Windows

- If commands aren't recognized, restart your Command Prompt
- If still not working, check if PATH environment variables were set correctly
- For Git issues, try running Git Bash instead of Command Prompt

### macOS

- If Homebrew commands fail, try:
  ```bash
  brew doctor
  ```
- If permissions issues occur:
  ```bash
  sudo chown -R $(whoami) $(brew --prefix)/*
  ```
- For command not found errors, restart your Terminal

## Updating

### Windows

- Node.js: Download and run the new installer
- Git: Download and run the new installer

### macOS

Using Homebrew:

```bash
brew update
brew upgrade node
brew upgrade git
```
# webify
# webify
