# Vibecode SPA Template

An AI-first single-page application template designed for building production-grade web apps with Claude Code. This template enforces quality through automated testing, linting, and type checking, making it safe for AI-driven development.

## What is Vibecoding?

Vibecoding is a development approach where:
- **You describe what you want** (the "vibe")
- **Claude Code writes the code** (follows strict patterns)
- **The system enforces quality** (tests, types, linting)

No coding knowledge required. Just describe your idea, and Claude handles the implementation.

## Tech Stack

- **Vite** - Lightning-fast build tool and dev server
- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe code (strict mode)
- **Tailwind CSS v4** - Utility-first styling
- **React Router** - Client-side routing
- **Supabase** - Backend and database (auth, storage, realtime)
- **Vitest** - Fast unit testing
- **ESLint** - Code quality enforcement
- **pnpm** - Fast, disk-efficient package manager

## Prerequisites

Before you start, you need:

1. **Node.js 20 or higher**
   ```bash
   node --version  # Should be v20.x.x or higher
   ```
   Download from [nodejs.org](https://nodejs.org/)

2. **pnpm package manager**
   ```bash
   corepack enable  # Enables pnpm
   pnpm --version   # Should be v10.x.x or higher
   ```

3. **Git**
   ```bash
   git --version
   ```

4. **Claude Code** (optional but recommended)
   - Install from [claude.com/claude-code](https://claude.com/claude-code)
   - Provides AI-powered development assistance

5. **Supabase Account** (for backend features)
   - Sign up at [supabase.com](https://supabase.com)
   - Create a new project
   - Get your project URL and anon key

6. **Vercel Account** (for deployment)
   - Sign up at [vercel.com](https://vercel.com)
   - Connect your GitHub repository

## Getting Started

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd vibecode-spa-template

# Install dependencies
pnpm install
```

### 2. Configure Environment Variables

```bash
# Copy the example env file
cp .env.example .env

# Edit .env and add your Supabase credentials:
# VITE_SUPABASE_URL=https://your-project.supabase.co
# VITE_SUPABASE_ANON_KEY=your-anon-key
```

**Get your Supabase credentials:**
1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings → API
4. Copy the Project URL and anon/public key

### 3. Start Development

```bash
# Start the dev server
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to see your app.

### 4. Verify Everything Works

```bash
# Run all quality checks
pnpm verify
```

This runs:
- ✓ ESLint (code quality)
- ✓ TypeScript (type checking)
- ✓ Vitest (all tests)

## Available Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build locally
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript compiler
pnpm test         # Run tests once
pnpm verify       # Run ALL checks (lint + typecheck + test)
```

## Project Structure

```
vibecode-spa-template/
├── src/
│   ├── routes/            # Page components (routing only)
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   └── layout/       # Layout components (header, footer, nav)
│   ├── features/         # Feature modules (ALL business logic)
│   ├── lib/              # Utilities and infrastructure
│   │   ├── env.ts       # Environment variable validation
│   │   └── supabase.ts  # Supabase client (single source of truth)
│   └── hooks/            # Shared React hooks
├── docs/                 # Project documentation
├── CLAUDE.md             # AI behavior guidelines (IMPORTANT!)
└── vercel.json           # Deployment configuration
```

## Working with Claude Code

This template includes `CLAUDE.md`, which contains strict guidelines that Claude Code follows. Key behaviors:

- **Incremental development** - Large features are broken into small chunks
- **Tests are mandatory** - Every feature gets tests before completion
- **Quality checks** - Lint, typecheck, and test after every change
- **No guessing** - Claude asks questions when requirements are unclear

### Example Prompts

```
"Add a contact form to the homepage"
"Create a navbar with links to Home and Settings"
"Add a todos list that saves to the database"
"Build a user profile page with avatar upload"
```

Claude will:
1. Break down the task into steps
2. Implement one step at a time
3. Write tests for each step
4. Verify everything passes
5. Show you progress and ask for confirmation

## Deployment

This template auto-deploys to Vercel when you push to `main`:

### 1. Add Environment Variables to Vercel

Before deploying, add your Supabase credentials to Vercel:

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add:
   - `VITE_SUPABASE_URL` → your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` → your Supabase anon key
4. Set them for Production, Preview, and Development

### 2. Push to Deploy

```bash
git add .
git commit -m "feat: your changes"
git push origin main
```

### 3. Vercel Build Process

- Runs `pnpm verify` (all quality checks)
- Runs `pnpm build` (production build)
- Deploys to global CDN
- Provides production URL

**Note**: Deployments fail if tests, linting, or type checking fails. This is intentional - it keeps production quality high.

## Quality Guarantees

Every deployment must pass:

- ✅ **No ESLint errors or warnings** - Code quality enforced
- ✅ **No TypeScript errors** - 100% type-safe
- ✅ **All tests passing** - Behavior verified
- ✅ **Successful production build** - No runtime issues

If any check fails, the deployment is blocked.

## Working with Supabase

### Database
- All database queries go in `features/*/services/*`
- Use Row Level Security (RLS) for access control
- Never access Supabase directly from routes or components

### Authentication
- Use Supabase Auth for user management
- Store auth logic in a dedicated feature module
- Handle auth state in custom hooks

### Storage
- Use Supabase Storage for file uploads
- Implement upload logic in feature services
- Configure bucket policies in Supabase dashboard

## Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://react.dev)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com)
- [Vitest Testing](https://vitest.dev)

## Support

- Check `CLAUDE.md` for detailed development guidelines
- Check `docs/PROJECT_OVERVIEW.md` for architecture details
- Open an issue on GitHub for bugs or questions

---

**Built for vibecoders. Powered by Claude Code.**
