import { useMDXComponents as getDocsMDXComponents, type Components } from 'nextra-theme-docs'

const docsComponents = getDocsMDXComponents()

export const useMDXComponents = (components: Components = {}) => ({
  ...docsComponents,
  ...components,
})
