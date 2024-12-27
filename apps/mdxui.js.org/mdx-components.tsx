import type { MDXComponents } from 'mdx/types'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { ComponentType } from 'react'

const docsComponents = getDocsMDXComponents()

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...docsComponents,
    h1: (({ children, className, ...props }) => (
      <h1 {...props} className={`text-4xl font-bold mb-4 ${className || ''}`}>
        {children}
      </h1>
    )) as ComponentType<any>,
    h2: (({ children, className, ...props }) => (
      <h2 {...props} className={`text-3xl font-bold mb-3 ${className || ''}`}>
        {children}
      </h2>
    )) as ComponentType<any>,
    h3: (({ children, className, ...props }) => (
      <h3 {...props} className={`text-2xl font-bold mb-2 ${className || ''}`}>
        {children}
      </h3>
    )) as ComponentType<any>,
    p: (({ children, className, ...props }) => (
      <p {...props} className={`mb-4 ${className || ''}`}>
        {children}
      </p>
    )) as ComponentType<any>,
    ...components,
  }
} 