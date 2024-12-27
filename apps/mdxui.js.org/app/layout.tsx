import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://mdxui.js.org'),
  title: {
    default: 'MDXUI',
    template: '%s | MDXUI'
  },
  description: 'Beautiful UI components for MDX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
