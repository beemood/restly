export function isEmptyString(stringParam: string) {
  return /^\s{0,}$/.test(stringParam);
}
