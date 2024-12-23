'use client'

import React from 'react'
import { Button } from '@repo/example-ui'

export default function Home() {
  return (
    <div>
      <h1>Web App</h1>
      <Button onClick={() => console.log('clicked')}>Click me</Button>
    </div>
  )
}
