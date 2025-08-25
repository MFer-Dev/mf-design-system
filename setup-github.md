# GitHub Repository Setup

## 1. Create New Repository on GitHub

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `mf-design-system`
5. Description: `Matterforma Design System - Comprehensive design tokens and components`
6. Make it **Public** (so it can be used across all repositories)
7. **Don't** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

## 2. Add Remote and Push

After creating the repository, GitHub will show you the commands. Run these in your terminal:

```bash
# Add the remote origin
git remote add origin https://github.com/YOUR_USERNAME/mf-design-system.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 3. Verify Setup

```bash
# Check remote
git remote -v

# Should show:
# origin  https://github.com/YOUR_USERNAME/mf-design-system.git (fetch)
# origin  https://github.com/YOUR_USERNAME/mf-design-system.git (push)
```

## 4. Next Steps

Once the repository is set up on GitHub, you can:

1. **Install in other repositories**:
   ```bash
   npm install https://github.com/YOUR_USERNAME/mf-design-system.git
   ```

2. **Update the package.json** in this repo to use your actual GitHub username
3. **Set up Railway deployment** if needed
4. **Implement the design system** in mf-web, mf-platform, and mf-manager

## Repository URL

Replace `YOUR_USERNAME` with your actual GitHub username in all the commands above.
