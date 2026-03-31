# Shelf

Shelf is a premium, open-source, self-hosted workspace tool designed for sovereignty and privacy.

## Features

- **Issue Tracking**: Linear-style management for your team.
- **Documentation**: Notion-style docs for knowledge management.
- **AI Co-pilot**: Private, locally-hosted AI assistance.
- **Self-Hosted**: Full control over your data.

## Getting Started

### Prerequisites

- Node.js 20+
- Docker & Docker Compose

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Keshavsharma-code/shelf-workspace.git
   cd shelf-workspace
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Setup environment:
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Docker Deployment

```bash
docker-compose up --build
```

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Deployment**: Docker
