export enum ResourceOperationNamePrefix {
  Find = 'find',
  FindOne = 'findOne',
  FindOneBy = 'findOneBy',
  FindOneById = 'findOneById',
  FindMany = 'findMany',
  FindManyBy = 'findManyBy',
  Create = 'create',
  CreateOne = 'createOne',
  CreateMany = 'createMany',
  Save = 'save',
  SaveOne = 'saveOne',
  SaveMany = 'saveMany',
  Update = 'update',
  UpdateOne = 'updateOne',
  UpdateOneBy = 'updateOneBy',
  UpdateOneById = 'updateOneById',
  UpdateMany = 'updateMany',
  UpdateManyBy = 'updateManyBy',
  Delete = 'delete',
  DeleteOne = 'deleteOne',
  DeleteOneBy = 'deleteOneBy',
  DeleteOneById = 'deleteOneById',
  DeleteMany = 'deleteMany',
  DeleteManyBy = 'deleteManyBy',
}

export const resourceOperationNamePrefixes = Object.values(
  ResourceOperationNamePrefix
);

export function isResourceOperationName(methoName: string) {
  return resourceOperationNamePrefixes.some((name) => methoName.endsWith(name));
}

export function isResourceOperationNameFind(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.Find);
}
export function isResourceOperationNameFindOne(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.FindOne);
}
export function isResourceOperationNameFindOneBy(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.FindOneBy);
}
export function isResourceOperationNameFindOneById(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.FindOneById);
}
export function isResourceOperationNameFindMany(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.FindMany);
}
export function isResourceOperationNameFindManyBy(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.FindManyBy);
}
export function isResourceOperationNameCreate(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.Create);
}
export function isResourceOperationNameCreateOne(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.CreateOne);
}
export function isResourceOperationNameCreateMany(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.CreateMany);
}
export function isResourceOperationNameSave(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.Save);
}
export function isResourceOperationNameSaveOne(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.SaveOne);
}
export function isResourceOperationNameSaveMany(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.SaveMany);
}
export function isResourceOperationNameUpdate(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.Update);
}
export function isResourceOperationNameUpdateOne(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.UpdateOne);
}
export function isResourceOperationNameUpdateOneBy(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.UpdateOneBy);
}
export function isResourceOperationNameUpdateOneById(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.UpdateOneById);
}
export function isResourceOperationNameUpdateMany(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.UpdateMany);
}
export function isResourceOperationNameUpdateManyBy(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.UpdateManyBy);
}
export function isResourceOperationNameDelete(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.Delete);
}
export function isResourceOperationNameDeleteOne(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.DeleteOne);
}
export function isResourceOperationNameDeleteOneBy(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.DeleteOneBy);
}
export function isResourceOperationNameDeleteOneById(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.DeleteOneById);
}
export function isResourceOperationNameDeleteMany(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.DeleteMany);
}
export function isResourceOperationNameDeleteManyBy(methoName: string) {
  return methoName.endsWith(ResourceOperationNamePrefix.DeleteManyBy);
}

export function inferResourceOperationNameFromOperationName(
  methodName: string
) {
  return resourceOperationNamePrefixes.find((e) => methodName.endsWith(e));
}
