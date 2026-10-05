type Channel = "dev" | "beta" | "prod"
const raw = import.meta.env.OPENCODE_CHANNEL
export const CHANNEL: Channel = raw === "dev" || raw === "beta" || raw === "prod" ? raw : "dev"

// Bia Tech Code has no release feed yet; upstream's feed would replace the app with OpenCode.
export const UPDATER_ENABLED = false
