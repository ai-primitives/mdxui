import fs from 'fs'
import path from 'path'

async function convertWorkspaceDependencies() {
  console.log('Starting workspace dependency conversion...')
  const packagesDir = path.join(process.cwd(), 'packages')
  console.log('Packages directory:', packagesDir)
  const packages = await fs.promises.readdir(packagesDir)
  console.log('Found packages:', packages)

  for (const pkg of packages) {
    const pkgPath = path.join(packagesDir, pkg, 'package.json')
    console.log('\nProcessing package:', pkg)
    try {
      const content = await fs.promises.readFile(pkgPath, 'utf8')
      const pkgJson = JSON.parse(content)
      let modified = false

      for (const depType of ['dependencies', 'devDependencies', 'peerDependencies']) {
        if (!pkgJson[depType]) continue

        for (const [name, version] of Object.entries(pkgJson[depType])) {
          if (version.startsWith('workspace:')) {
            console.log(`Found workspace dependency: ${name} (${version})`)
            const depPkgPath = path.join(packagesDir, name.replace('@mdxui/', ''), 'package.json')
            console.log('Resolving dependency path:', depPkgPath)
            const depContent = await fs.promises.readFile(depPkgPath, 'utf8')
            const depPkg = JSON.parse(depContent)
            pkgJson[depType][name] = `^${depPkg.version}`
            console.log(`Converting ${name} from ${version} to ^${depPkg.version}`)
            modified = true
          }
        }
      }

      if (modified) {
        await fs.promises.writeFile(pkgPath, JSON.stringify(pkgJson, null, 2) + '\n')
      }
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.error(`Error processing ${pkgPath}:`, error)
      }
    }
  }
}

convertWorkspaceDependencies()
