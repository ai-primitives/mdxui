import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'AI-Driven Documentation | mdx.org.ai'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  // Font
  // const interSemiBold = fetch(
  //   new URL('./Inter-SemiBold.ttf', import.meta.url)
  // ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div tw='flex flex-col items-start justify-center w-full h-full p-12 text-white bg-[#04161A]'>
        <div tw='flex items-center space-x-3'>
          <span tw='text-4xl font-medium text-teal-400 mr-3'>mdx.org.ai</span>
          <span tw='text-4xl text-gray-700 mr-3'>/</span>
          <h1 tw='text-4xl font-medium text-teal-400'>AI</h1>
        </div>
        <div tw='flex flex-col mt-8'>
          <h2 tw='text-7xl font-extrabold text-white'>AI-Driven Documentation</h2>
          <p tw='mt-4 text-3xl font-base text-gray-400 leading-10'>
            Leverage MDX to integrate AI primitives, simplify workflows, and create dynamic content effortlessly.
          </p>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: 'Inter',
      //     data: await interSemiBold,
      //     style: 'normal',
      //     weight: 400,
      //   },
      // ],
    },
  )
}
