# Installation Guide for Node.js and Git

---

## Windows Installation

### Installing Node.js on Windows

1. Visit the [Node.js official website](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the downloaded `.msi` installer
4. Follow the installation wizard:
   - Click **"Next"**
   - Accept the license terms
   - Choose the installation location (default is recommended)
   - Click **"Next"** on all default options
   - Click **"Install"**
5. Verify installation by opening Command Prompt and typing:

node --version
npm --version

---

### Installing Git on Windows

1. Visit the [Git for Windows website](https://git-scm.com/)
2. Download the latest version for Windows
3. Run the installer:
   - Click **"Next"**
   - Choose installation location (default recommended)
   - Select components (default recommended)
   - Choose default editor (e.g., Visual Studio Code)
   - Choose default branch name (**main** recommended)
   - Choose PATH environment  
     → **"Git from the command line and also from 3rd-party software"**
   - Choose HTTPS transport backend (**OpenSSL recommended**)
   - Choose line ending conversions  
     → **"Checkout Windows-style, commit Unix-style"**
   - Choose terminal emulator (**Windows' default console recommended**)
   - Choose default `git pull` behavior (**Fast-forward or merge**)
   - Choose credential helper (**Git Credential Manager**)
   - Enable file system caching
   - Click **"Install"**
4. Verify installation:

git --version

---

## macOS Installation

### Installing Node.js on macOS

#### **Option 1: Using Homebrew (Recommended)**

1. Open **Terminal**
2. Install Homebrew (if not installed):

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh
)"

3. Install Node.js:

brew install node

4. Verify installation:

node --version
npm --version

---

#### **Option 2: Direct Download**

1. Visit the [Node.js official website](https://nodejs.org/)
2. Download the macOS LTS installer (`.pkg`)
3. Run the installer
4. Follow the installation wizard
5. Verify using commands above

---

### Installing Git on macOS

#### **Option 1: Using Homebrew (Recommended)**

1. Open Terminal
2. Install Git:

brew install git

3. Verify installation:

git --version
---

#### **Option 2: Using Xcode Command Line Tools**

1. Open Terminal
2. Run:
xcode-select --install

3. Follow the installation prompts
4. Verify installation:

git --version

---

## Post-Installation Setup

### Configure Git (Windows & macOS)

Set your username:

git config --global user.name "Your Name"

Set your email:

git config --global user.email "your.email@example.com
"

---

## Verify Everything is Working

### Node.js:
node --version # Should show v18.x.x or higher
npm --version # Should show 9.x.x or higher

### Git:
git --version # Should show 2.x.x or higher

---

## Troubleshooting

### Windows
- If commands aren't recognized, **restart Command Prompt**
- Check if **PATH variables** were set correctly
- For Git issues, try using **Git Bash**

### macOS
- If Homebrew issues occur, run:
brew doctor

- Fix permissions:
sudo chown -R $(whoami) $(brew --prefix)/*

- Restart Terminal for command-not-found issues

---

## Updating

### Windows
- **Node.js**: Download and run the latest installer  
- **Git**: Download and run the latest installer

### macOS (Homebrew)
brew update
brew upgrade node
brew upgrade git

---

# Webify






