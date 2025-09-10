/**
 * Replace all extra space characters from the given {@link name} and trim it.
 *
 * @group Names
 * @param name string
 * @returns trimmed string
 */
export function trim(name: string) {
  return name.trim().replace(/\s{1,}/g, ' ');
}
