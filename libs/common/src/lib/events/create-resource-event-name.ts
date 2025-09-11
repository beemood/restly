export function createResourceEventName(resourceName:string, operationName:string){ 
    return `${resourceName}.${operationName}`
}