javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

12. .gitignore (root)

```gitignore
# Dependencies
node_modules/
package-lock.json
yarn.lock

# Environment files (important!)
.env
.env.local
.env.production
.env.development
*.env

# Build files
dist/
build/
*.tsbuildinfo

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS files
.DS_Store
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
*.swo

# Temporary files
tmp/
temp/
*.tmp

# Coverage
coverage/
.nyc_output/

# Database files
*.db
*.sqlite
*.sqlite3

# Uploads
uploads/
storage/