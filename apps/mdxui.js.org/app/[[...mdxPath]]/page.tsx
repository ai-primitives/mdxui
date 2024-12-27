/* eslint-disable react-hooks/rules-of-hooks -- false positive, useMDXComponents are not react hooks */

import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

interface PageProps {
  params: {
    mdxPath: string[]
  }
}

interface WrapperProps {
  children: ReactNode
  toc: any
  metadata: any
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

const components = useMDXComponents({})
const Wrapper = components.wrapper as React.ComponentType<WrapperProps>

export default async function Page(props: PageProps) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
