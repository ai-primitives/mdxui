# @mdxui/widgets

Interactive components for MDXUI including Chat, Editor, SearchBox, CommandBar, and SearchList components.

## Installation

```bash
pnpm add @mdxui/widgets
```

## Features

- Chat interface components
- Rich text editor
- Command palette
- Search components
- Autocomplete
- Real-time updates
- Keyboard shortcuts
- Accessibility support

## Components

### Chat Widget

```tsx
import { Chat } from '@mdxui/widgets'

<Chat
  messages={messages}
  onSend={handleSend}
  placeholder="Type a message..."
/>
```

### Editor

```tsx
import { Editor } from '@mdxui/widgets'

<Editor
  value={content}
  onChange={handleChange}
  plugins={['markdown', 'mentions']}
/>
```

### SearchBox

```tsx
import { SearchBox } from '@mdxui/widgets'

<SearchBox
  onSearch={handleSearch}
  suggestions={suggestions}
  placeholder="Search..."
/>
```

### CommandBar

```tsx
import { CommandBar } from '@mdxui/widgets'

<CommandBar
  commands={commands}
  onCommand={handleCommand}
  hotkey="cmd+k"
/>
```

### SearchList

```tsx
import { SearchList } from '@mdxui/widgets'

<SearchList
  items={items}
  onSelect={handleSelect}
  renderItem={renderItem}
/>
```

## Configuration

Each widget can be customized with themes, plugins, and behavior options:

```tsx
import { configureWidget } from '@mdxui/widgets'

configureWidget('chat', {
  theme: 'light',
  plugins: ['emoji', 'mentions'],
  behavior: {
    realtime: true,
    notifications: true
  }
})
```

## Related Packages

- `@mdxui/types` - TypeScript type definitions
- `@mdxui/shared` - Shared components and utilities
- `@mdxui/shadcn` - shadcn/ui components

## License

MIT © 2024 [Drivly](https://driv.ly) 