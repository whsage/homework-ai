# Homework Tutoring Platform - Architecture

## 1. Technology Stack

- **Build Tool**: Vite (Fast, modern bundler)
- **Framework**: React (Function components + Hooks)
- **Styling**: Tailwind CSS (Utility-first CSS framework)
- **Icons**: Lucide React (Clean, consistent icons)
- **Routing**: React Router DOM
- **HTTP Client**: Axios (or native Fetch)
- **State Management**: React Context API + Hooks (or Zustand for global store if needed)

## 2. Project Structure

```
src/
├── assets/          # Static assets (images, global css)
├── components/      # Reusable UI components
│   ├── ui/          # Basic UI elements (Button, Input, Card)
│   ├── layout/      # Layout components (Header, Sidebar)
│   └── business/    # Domain-specific components (ChatBubble, HomeworkCard)
├── pages/           # Page components (routed)
├── hooks/           # Custom React hooks
├── context/         # React Context providers
├── services/        # API service integrations
└── types/           # TypeScript interfaces/types (if using TS)
```

## 3. Component Tree (High Level)

- **App** (Root provider setup: AuthProvider, Router)
  - **Layout** (Main shell)
    - **Sidebar** (Navigation: Dashboard, History, Settings)
    - **Header** (User Profile, Theme Toggle)
    - **MainContent** (Outlet)
      - **DashboardPage**
        - `StatCard` (Metrics)
        - `RecentHomeworkList`
      - **HomeworkListPage**
        - `HomeworkGrid` -> `HomeworkCard`
      - **HomeworkDetailPage** (The Workspace)
        - `SplitView`
          - Left: `DocumentViewer` (Image/PDF reference)
          - Right: `ChatInterface`
            - `MessageList` -> `MessageBubble`
            - `ChatInput`
      - **LoginPage** (GitHub OAuth)

## 4. Data Flow
- **Authentication**: Handled via `AuthContext`, stores JWT/Session token in localStorage/Cookies.
- **Chat**: Real-time or polled updates. Local state for immediate UI feedback, synced with backend.
- **Homework Data**: Fetched via services, cached where appropriate (React Query could be added for optimization).
