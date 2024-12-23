'use client'

import { Button } from '@mdxui/shared'

export default function Home() {
  return (
    <div>
      <h1>Web App</h1>
      <Button onClick={() => console.log('clicked')}>Click me</Button>
    </div>
  )
}
