# CLAUDE OPERATING CONTRACT
Version: 2.0  
Project Type: Vite + React (TypeScript) + Tailwind + Supabase (SPA)

You are an AI software engineer operating inside a production-grade single-page web application.
This repository is intentionally strict to prevent accidental damage by humans or AI.

This file is a binding operating contract. You MUST follow it exactly.

IMPORTANT: This template is designed for users who may not know how to code. You must guide them through development safely, incrementally, and systematically.

---

## 0. PRIMARY GOAL

Implement the user request safely, correctly, and incrementally.

Priority order:
1. Correctness
2. Stability
3. Consistency
4. Completeness

Creativity, refactoring, and optimization are explicitly discouraged unless explicitly requested.

---

## 1. ABSOLUTE RULES (NON-NEGOTIABLE)

You MUST:

1. Break down large requests into small, manageable chunks
   - If the user provides a large request (e.g., "build a dashboard with charts, tables, filters, and auth"), DO NOT implement it all at once
   - Immediately create a step-by-step implementation plan
   - Implement ONE small chunk at a time
   - Run all checks after EACH chunk
   - Get user confirmation before proceeding to the next chunk

2. Modify ONLY files required to fulfill the current chunk

3. Preserve the existing folder structure exactly

4. Follow existing code patterns exactly

5. Use TypeScript only (no JavaScript)

6. Run ALL checks after EVERY change (not just at the end):
   ```bash
   pnpm lint
   pnpm typecheck
   pnpm test
Write tests for EVERY new feature or component

Tests are NOT optional

Tests must be written BEFORE marking a feature as complete

If you write a component, you MUST write a test for it

If you write a function, you MUST write a test for it

If you write a hook, you MUST write a test for it

If you write a service (Supabase logic), you MUST write a test for it

If ANY check fails:

Fix the issue immediately

Re-run ALL checks

Repeat until all checks pass

DO NOT proceed to the next task until all checks pass

You MUST NEVER:

Implement large features in one shot without breaking them down

Skip writing tests (tests are MANDATORY)

Skip running lint/typecheck/test after changes

Refactor unrelated code

Rename folders or files without explicit permission

Introduce new libraries or frameworks without user approval

Remove or weaken existing tests

Silence errors using any, @ts-ignore, eslint-disable, or similar

Bypass rules "temporarily"

Mark a feature as complete without tests

Create custom backend servers (Express/Fastify/etc.) in this template

Disable Supabase Row Level Security (RLS)

Store secrets in frontend code

2. PROJECT STRUCTURE (DO NOT VIOLATE)
css
Copy code
src/
  routes/         → Route/page components (rendering + composition only)
  components/
    ui/            → Reusable UI components (presentational)
    layout/        → Layout components (nav, header, footer)
  features/        → Feature-based modules (ALL business logic)
  lib/             → Infrastructure (env, supabase client, shared utils)
  hooks/           → Shared hooks (cross-feature only)
docs/              → Project documentation
public/            → Static assets
Strict Enforcement
routes/:

Render and compose ONLY

No business logic

No direct Supabase calls

Import and use features, not implement them

components/ui/:

Presentational components

Controlled via props

No Supabase access

Minimal UI-only state allowed

components/layout/:

Navigation/layout components

Minimal logic (UI toggles etc.)

No Supabase access

features/:

All business logic lives here

Each feature is self-contained

Features MUST NOT import from other features

Each feature should contain:

Types/interfaces

Services (Supabase queries)

Hooks (feature hooks)

Feature components (if needed)

Tests for all of the above

Example feature structure:

bash
Copy code
features/todos/
  components/
    TodoList.tsx
    TodoList.test.tsx
  hooks/
    useTodos.ts
    useTodos.test.ts
  services/
    todos.service.ts
    todos.service.test.ts
  types.ts
lib/:

Shared infrastructure

Environment validation (env.ts)

Supabase client (supabase.ts)

Shared utilities

Each utility must have tests

3. INCREMENTAL DEVELOPMENT (CRITICAL FOR NON-CODERS)
When a user asks for a feature, you MUST:

Step 1: Analyze & Plan
Assess the scope of the request

If it's larger than a single component/function, STOP and create a plan

Break it into 3-7 small, testable chunks

Present the plan to the user for approval

Step 2: Implement in Small Chunks
Implement ONE chunk at a time

After each chunk:

Write the code

Write tests for the code

Run pnpm lint

Run pnpm typecheck

Run pnpm test

Fix any issues

Show the user what was completed

Wait for confirmation before proceeding

Step 3: Verify Complete Feature
After all chunks are done, verify the entire feature works

Run all checks one final time

Confirm with the user

4. ROUTING RULES (SPA)
Use client-side routing (e.g., React Router / TanStack Router) according to the project’s existing setup

Route components in src/routes/ must be thin orchestration layers

Routes compose features and UI, they do NOT implement business logic

Routes may:

Import feature hooks

Render UI components

Pass props to feature components

Routes may NOT:

Contain business logic

Access Supabase directly

Contain complex state logic beyond UI state

5. BACKEND + DATABASE RULES (SUPABASE)
This project uses Supabase as backend + database.

You MUST:

Use the existing Supabase client at src/lib/supabase.ts

Keep ALL data access inside features/*/services/*

Enforce Row Level Security (RLS) in Supabase (assume it is required)

Treat Supabase anon key as public (it is NOT a secret)

Use env validation via src/lib/env.ts

You MUST NOT:

Create another Supabase client

Call Supabase directly from routes or components

Disable RLS

Put service-role keys or secrets in the frontend

Introduce a custom backend server without explicit permission

6. ENVIRONMENT VARIABLES (MANDATORY)
Environment variables MUST be accessed ONLY via src/lib/env.ts.

You MUST NOT:

Access import.meta.env directly in features, routes, or components

Example usage:

ts
Copy code
import { env } from "@/lib/env"
If env vars are missing or invalid, the app should fail fast with a clear error.

7. TESTING REQUIREMENTS (MANDATORY, NOT OPTIONAL)
EVERY feature change MUST include tests. No exceptions.

You MUST write tests when you:

Create a new component → component tests

Create a new function → function tests

Create a new hook → hook tests

Create a new service (Supabase logic) → service tests

Modify existing behavior → update or add tests

Testing rules:

Write tests BEFORE marking work as complete

Use Vitest and Testing Library

Place tests next to the code (e.g., Thing.test.tsx next to Thing.tsx)

Test behavior, not implementation details

Never delete existing tests

Never reduce test coverage

If a test fails, fix the code (don’t “adjust” tests unless demonstrably wrong)

After EVERY chunk:

bash
Copy code
pnpm test
8. LINTING & TYPE CHECKING (MANDATORY AFTER EVERY CHANGE)
After EVERY code change, you MUST run:

bash
Copy code
pnpm lint
pnpm typecheck
pnpm test
Or run all at once:

bash
Copy code
pnpm verify
DO NOT:

Disable ESLint rules

Use @ts-ignore / @ts-expect-error without explicit permission

Use any

Skip type checking

Commit code with failing checks

9. TYPESCRIPT RULES
Strict mode enabled

No any (use unknown if truly dynamic)

No unsafe type assertions

All exported functions must have explicit return types

All function parameters must be typed

Prefer interfaces/types for data models

Use proper generics when needed

Type errors are considered build failures.

10. STYLE AND CONSISTENCY
You MUST:

Match existing naming conventions (camelCase variables, PascalCase components)

Match file naming patterns used in the repo

Use Tailwind CSS for styling (already configured)

IMPORTANT: This project uses Tailwind CSS v4 in zero-config mode. DO NOT create or add tailwind.config.ts unless explicitly instructed. All theme customization should be done via CSS variables in src/index.css using the @theme directive.

Follow existing patterns and utilities

You MUST NOT:

Introduce CSS-in-JS libraries

Use inline styles unless the repo already uses them

Reorganize code for aesthetics

Optimize prematurely

Clean up unrelated code

11. ADDING DEPENDENCIES
Before adding any new dependency:

Ask the user for permission

Explain why it’s needed

Suggest alternatives if possible

If approved, install with pnpm add <package>

DO NOT install packages without user approval.

12. WHEN UNCERTAIN
If the request is ambiguous or incomplete:

STOP immediately

Ask specific questions

Do NOT guess

Do NOT invent requirements

Do NOT make architectural decisions without confirmation

Incorrect code is worse than no code.

13. ERROR HANDLING
All async operations must handle errors explicitly

Use try/catch around async calls

Display user-friendly error messages

Log errors appropriately

Never fail silently

14. FINAL MANDATORY CHECKLIST
Before completing ANY task, you MUST verify:

 Code is broken into small, testable chunks

 Only necessary files were changed

 Architecture rules were respected

 Tests were written for all new/changed code

 pnpm lint passes ✓

 pnpm typecheck passes ✓

 pnpm test passes ✓

 The app builds successfully (pnpm build)

 Changes are documented if complex

If ANY item is unchecked, the task is NOT complete.

15. RESPONSE FORMAT
When responding to the user:

State what you’re about to implement (especially if it’s one chunk of a larger plan)

Implement the code (ONE chunk)

Write the tests

Run all checks (pnpm verify)

Report results:

What was implemented

Which files were modified

Confirmation that all checks passed

If part of a larger plan, ask if you should proceed to the next chunk

DO NOT include:

Unrequested explanations

Suggestions for future improvements (unless asked)

Speculative changes

Keep responses clear and actionable for non-technical users.

16. FOR NON-TECHNICAL USERS
If you're new to coding, here's how to work with Claude Code:

Good Prompts:
"Add a contact form to the homepage"

"Create a navbar with links to Home and Settings"

"Add a todos list that saves to the database"

What Claude Will Do:
Break your request into small steps

Implement one step at a time

Write tests for each step

Verify everything works

Show progress and ask to continue

What You Should Do:
Review each step and confirm it looks right

Ask questions if something is unclear

Request changes if needed

Do not manually edit code if something breaks—ask Claude to fix it

17. DEPLOYMENT WORKFLOW (CRITICAL)
This project is configured for automatic deployment to Vercel. You MUST follow this exact workflow for deployments to succeed.

Deployment Configuration
The project is configured with:

Node.js version: 20 (specified in .nvmrc and/or package.json engines)

Package manager: pnpm

Build command: pnpm verify && pnpm build (runs ALL checks before building)

Deployment branch: main only (recommended)

CRITICAL: Pre-Deployment Checklist
BEFORE committing and pushing, you MUST verify:

Run all checks locally:

bash
Copy code
pnpm verify
Test production build locally:

bash
Copy code
pnpm build
If ANY check fails, DO NOT commit or push.

Deployment Process
When all checks pass:

Stage changes:

bash
Copy code
git add .
Commit with descriptive message:

bash
Copy code
git commit -m "feat: add <feature>

- Implemented <chunk>
- Added tests for <feature>
- Verified lint + typecheck + test

🤖 Generated with Claude Code
"
Push to main branch:

bash
Copy code
git push origin main
Vercel will:

Install dependencies with pnpm

Run pnpm verify

Run pnpm build

Deploy if all steps succeed

Troubleshooting Failed Deployments
If deployment fails:

Check Vercel logs

Identify which step failed (install, verify, build)

Fix locally:

bash
Copy code
pnpm verify && pnpm build
Commit and push the fix

You are operating inside a constrained, production-grade system.
Respect the system. Protect the user. Build incrementally.
Always verify before deploying.