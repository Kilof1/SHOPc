export function startupSettings(): void {
  console.log(process.env.JWT_PRIVATE_KEY)
  const jwtPritavetKey = process.env.JWT_PRIVATE_KEY
  if (!jwtPritavetKey) {
    throw new Error('JWT Private Key is not defined')
  }
}
