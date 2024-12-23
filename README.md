# mdxui

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A collection of React/JSX components and layouts for MDX with YAML-LD frontmatter type support. MDXUI enables rapid development of type-driven documentation, blogs, marketing sites, and application dashboards.

## Packages

- `@mdxui/types` - Core TypeScript types extending schema-dts to support `$type` alongside `@type`
- `@mdxui/shared` - Shared components, layouts, libraries, hooks, configurations and utilities
- `@mdxui/shadcn` - Shared shadcn/ui component implementations
- `@mdxui/tremor` - Shared Tremor chart and visualization components

### Use Case Specific Packages

- `@mdxui/blog` - Blog-specific layouts and components
- `@mdxui/directory` - Directory and listing page components
- `@mdxui/docs` - Documentation site layouts and components
- `@mdxui/marketing` - Landing page and marketing site components
- `@mdxui/dashboard` - Application dashboard shells and components

### Widgets

- `@mdxui/widgets` - Interactive components including:
  - Chat
  - Editor
  - SearchBox
  - CommandBar
  - SearchList

## Getting Started

```bash
# Install core packages
pnpm add @mdxui/types @mdxui/layouts @mdxui/components

# Install use case specific packages
pnpm add @mdxui/blog  # For blog sites
pnpm add @mdxui/docs  # For documentation
pnpm add @mdxui/dashboard  # For application dashboards
```

## Usage Example

```tsx
import { BlogLayout } from '@mdxui/blog'
import { SearchBox } from '@mdxui/widgets'

// Your MDX file with YAML-LD frontmatter
---
$type: BlogPost
title: Getting Started with MDXUI
date: 2024-03-20
---

export default function Post({ children }) {
  return (
    <BlogLayout>
      <SearchBox />
      {children}
    </BlogLayout>
  )
}
```

## Workspace Structure

```
.
├── packages/
│   ├── types/        # Core TypeScript types
│   ├── layouts/      # Layout components
│   ├── components/   # Shared components
│   ├── blog/         # Blog-specific components
│   ├── docs/         # Documentation components
│   └── widgets/      # Interactive widgets
├── apps/
│   └── web/          # Demo site
├── config/           # Shared configurations
└── turbo.json
```

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Start development
pnpm dev
```

## Key Features

- 🎯 Type-driven development with YAML-LD frontmatter
- 📱 Responsive layouts for various use cases
- 🎨 Customizable theming and styling
- ⚡️ High-performance React components
- 🔍 Built-in search and navigation widgets
- 📝 Rich text editing capabilities
- 🎛️ Interactive dashboard components

## Contributing

Please read our [Contributing Guide](./CONTRIBUTING.md) to learn about our development process and how to propose improvements.

## License

MIT © 2024 [Drivly](https://driv.ly)

## Tech Stack

- React/Next.js
- TypeScript
- MDX
- MDX-LD
- shadcn/ui
- Tremor
- Turborepo
- pnpm workspaces

## Contributing & Release Process

### Making Changes

1. Create a new branch for your changes
2. Make your changes
3. Create a changeset to document your changes:
```bash
pnpm changeset
```
4. Follow the prompts to describe your changes
   - Select which packages are affected
   - Choose the semver increment (major, minor, patch)
   - Write a description of the changes

### Publishing

The release process is automated through GitHub Actions:

1. When changes are merged to `main`, a new PR will be created with version updates
2. Once this "Version Packages" PR is merged, packages will be automatically published to npm

### Manual Release (if needed)

```bash
# View current changes
pnpm changeset status

# Bump versions
pnpm run version-packages

# Build and publish
pnpm run publish-packages
```
