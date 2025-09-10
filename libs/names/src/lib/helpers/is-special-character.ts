export function isSpecialCharacter(stringParam: string) {
  return /[_^!"#$%&'()*+,-./\\:;<=>?@|`{}[\]]{1,}/.test(stringParam);
}
