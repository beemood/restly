export function replaceSpecialCharsWithSingleSpace(stringParam: string) {
  return stringParam.replace(/[_^!"#$%&'()*+,-./\\:;<=>?@|`{}[\]]{1,}/g, ' ');
}
