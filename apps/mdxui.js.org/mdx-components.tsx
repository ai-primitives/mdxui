import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-2">{children}</h3>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    ...components,
  }
} 