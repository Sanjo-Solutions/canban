export function generateIdentifier(identity: {
  sub: string
  username: string
}): string {
  return `${identity.sub}::${identity.username}`
}
