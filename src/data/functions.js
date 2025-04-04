import noblox from 'noblox.js'

await noblox.setCookie(process.env.ROBLOX_COOKIE)

export const getUserData = async (username) => {
  const user = await noblox.getUserIdFromUsername(username)
  const info = await noblox.getPlayerInfo(user)
  return info
}

export const getDecalData = async (id) => {
  const asset = await noblox.getAssetInfo(id)
  if (asset.AssetTypeId === 13) return asset
  return null
}
