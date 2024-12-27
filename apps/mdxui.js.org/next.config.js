const nextra = require('nextra')

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false,
  },
  contentDirBasePath: '/',
})

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['mdxui.js.org'],
  },
}

module.exports = withNextra(config) 