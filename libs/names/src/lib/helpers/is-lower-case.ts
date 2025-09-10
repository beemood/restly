export function isLowerCase(stringParam: string) {
  return /^[^A-Z]{1,}$/.test(stringParam);
}
