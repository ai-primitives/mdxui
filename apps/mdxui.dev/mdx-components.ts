import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { Components } from '@mdx-js/react'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents = (components: Components = {}) => ({
  ...docsComponents,
  ...components,
})
