/**
 * Transform the first letter of the given {@link name } into upper-case
 *
 * @group Names
 * @param name string
 * @returns string whose first letter is upper case
 */
export function upperCaseFirst(name: string) {
  if (name.length == 0) {
    return name;
  }
  return name[0].toUpperCase() + name.slice(1);
}
