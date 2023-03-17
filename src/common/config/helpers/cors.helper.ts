/**
 * Returns an array with different origins configured in CORS_ORIGIN environment
 * variable
 */
export function parseOriginFromEnvironment(): string[] {
  const { CORS_ORIGIN } = process.env;

  return CORS_ORIGIN?.split(',').map((origin: string) => origin.trim()) ?? [];
}
