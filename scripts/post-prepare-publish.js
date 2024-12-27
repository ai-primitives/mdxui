import fs from 'fs'
import path from 'path'

async function reconvertWorkspaceDependencies() {
  console.log('Starting post-prepare workspace dependency conversion...')
  const packagesDir = path.join(process.cwd(), 'packages')
  console.log('Packages directory:', packagesDir)
  const packages = await fs.promises.readdir(packagesDir)
  console.log('Found packages:', packages)

  let hasWorkspaceDeps = false

  for (const pkg of packages) {
    const pkgPath = path.join(packagesDir, pkg, 'package.json')
    console.log('\nProcessing package:', pkg)
    try {
      const content = await fs.promises.readFile(pkgPath, 'utf8')
      const pkgJson = JSON.parse(content)
      let modified = false

      // Store original version before any modifications
      const originalVersion = pkgJson.version
      console.log(`Current version for ${pkg}: ${originalVersion}`)

      for (const depType of ['dependencies', 'devDependencies', 'peerDependencies']) {
        if (!pkgJson[depType]) continue

        for (const [name, version] of Object.entries(pkgJson[depType])) {
          if (version.startsWith('workspace:')) {
            hasWorkspaceDeps = true
            console.log(`Found workspace dependency: ${name} (${version})`)
            const depPkgPath = path.join(packagesDir, name.replace('@mdxui/', ''), 'package.json')
            console.log('Resolving dependency path:', depPkgPath)
            
            try {
              const depContent = await fs.promises.readFile(depPkgPath, 'utf8')
              const depPkg = JSON.parse(depContent)
              pkgJson[depType][name] = `^${depPkg.version}`
              console.log(`Converting ${name} from ${version} to ^${depPkg.version}`)
              modified = true
            } catch (depError) {
              console.error(`Error reading dependency package ${name}:`, depError)
              // Continue with other dependencies rather than failing completely
              continue
            }
          }
        }
      }

      if (modified) {
        // Ensure we preserve the version that multi-semantic-release set
        pkgJson.version = originalVersion
        console.log(`Preserving version ${originalVersion} for ${pkg}`)
        
        await fs.promises.writeFile(pkgPath, JSON.stringify(pkgJson, null, 2) + '\n')
        console.log(`Updated package.json for ${pkg}`)
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`Skipping ${pkg} - no package.json found`)
      } else {
        console.error(`Error processing ${pkgPath}:`, error)
        throw error // Propagate error to trigger process.exit(1)
      }
    }
  }

  if (!hasWorkspaceDeps) {
    console.log('No workspace dependencies found - all packages are ready for publishing')
  }

  return hasWorkspaceDeps
}

// Execute and handle errors
reconvertWorkspaceDependencies()
  .then(hasWorkspaceDeps => {
    if (hasWorkspaceDeps) {
      console.log('Successfully converted all workspace dependencies')
      // Exit with status 1 if we found and converted workspace deps
      // This will cause multi-semantic-release to retry the prepare phase
      process.exit(1)
    }
    // Exit normally if no workspace deps were found
    process.exit(0)
  })
  .catch(err => {
    console.error('Error reconverting workspace dependencies:', err)
    process.exit(1)
  })
