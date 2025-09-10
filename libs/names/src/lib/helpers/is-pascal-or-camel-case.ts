/**
 * Check the {@link stringParam } is `PascalCase` or `camelCase`
 *
 * @param stringParam
 * @returns
 */
export function isPascalOrCamelCase(stringParam: string) {
  return (
    /[a-z]{1,}/.test(stringParam) &&
    /[A-Z]{1,}/.test(stringParam) &&
    /^[a-zA-Z]{2,}$/.test(stringParam)
  );
}
