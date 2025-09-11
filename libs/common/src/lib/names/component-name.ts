export enum ComponentNameSuffix {
  Controller = 'Controller',
  Service = 'Service',
  Listener = 'Listener',
  Dto = 'Dto',
  Module = 'Module',
  Interceptor = 'Interceptor',
  Middleware = 'Middleware',
  Filter = 'Filter',
  Cron = 'Cron',
}

export enum ComponentNamePrefix {
  Create = 'Create',
  Update = 'Update',
  Query = 'Query',
  Where = 'Where',
  Page = 'Page',
  Select = 'Select',
  Order = 'Order',
  OrderBy = 'OrderBy',
  Public = 'Public',
  Secure = 'Secure',
}

export const componentNamePrefixes = Object.values(ComponentNamePrefix);

export const componentNameSuffixes = Object.values(ComponentNameSuffix);

export function isComponentName(className: string) {
  return componentNameSuffixes.some((value) => className.endsWith(value));
}

export function isControllerName(className: string): boolean {
  return className.endsWith(ComponentNameSuffix.Controller);
}

export function isServiceName(className: string): boolean {
  return className.endsWith(ComponentNameSuffix.Service);
}

export function isModuleName(className: string): boolean {
  return className.endsWith(ComponentNameSuffix.Module);
}

export function isListenerName(className: string): boolean {
  return className.endsWith(ComponentNameSuffix.Listener);
}

export function isDtoName(className: string): boolean {
  return className.endsWith(ComponentNameSuffix.Dto);
}

export function getComponentNameSuffix(
  componentClassName: string
): ComponentNameSuffix | undefined {
  return componentNameSuffixes.find((e) => componentClassName.endsWith(e));
}

export function getComponentNamePrefix(componentClassName: string) {
  return componentNamePrefixes.find((e) => componentClassName.startsWith(e));
}

export function inferResourceNameFromComponentName(componentClassName: string) {
  const suffix = getComponentNameSuffix(componentClassName);
  const prefix = getComponentNamePrefix(componentClassName);

  let resouceName = componentClassName;
  if (prefix != undefined) {
    resouceName = resouceName.replace(prefix, '');
  }

  if (suffix != undefined) {
    resouceName = resouceName.replace(suffix, '');
  }

  return resouceName;
}
