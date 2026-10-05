import { $ } from "bun"
import { createRequire } from "node:module"
import { dirname, join } from "node:path"

// In dev mode macOS reads the Dock/menu bar name from the Electron.app bundle,
// so it shows "Electron". Rename the local dev bundle so the app is recognizable.
const name = "Bia Tech Code Dev"

if (process.platform === "darwin") {
  const executable: string = createRequire(import.meta.url)("electron")
  const bundle = dirname(dirname(dirname(executable)))
  const plist = join(bundle, "Contents", "Info.plist")
  const current = (await $`plutil -extract CFBundleName raw ${plist}`.quiet().text()).trim()
  if (current !== name) {
    await $`plutil -replace CFBundleName -string ${name} ${plist}`
    await $`plutil -replace CFBundleDisplayName -string ${name} ${plist}`
    await $`codesign --force --deep --sign - ${bundle}`.quiet()
    console.log(`Renamed dev Electron bundle to "${name}"`)
  }
}
