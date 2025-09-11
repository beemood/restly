import {
  isResourceOperationName,
  isResourceOperationNameCreate,
  isResourceOperationNameCreateMany,
  isResourceOperationNameCreateOne,
  isResourceOperationNameDelete,
  isResourceOperationNameDeleteMany,
  isResourceOperationNameDeleteManyBy,
  isResourceOperationNameDeleteOne,
  isResourceOperationNameDeleteOneBy,
  isResourceOperationNameDeleteOneById,
  isResourceOperationNameFind,
  isResourceOperationNameFindMany,
  isResourceOperationNameFindManyBy,
  isResourceOperationNameFindOne,
  isResourceOperationNameFindOneBy,
  isResourceOperationNameFindOneById,
  isResourceOperationNameSave,
  isResourceOperationNameSaveMany,
  isResourceOperationNameSaveOne,
  isResourceOperationNameUpdate,
  isResourceOperationNameUpdateMany,
  isResourceOperationNameUpdateManyBy,
  isResourceOperationNameUpdateOne,
  isResourceOperationNameUpdateOneBy,
  isResourceOperationNameUpdateOneById,
} from './resource-operation-name.js';

describe('resource-operation-name', () => {
  describe('isResourceOperationName', () => {
    describe('returns', () => {
      it.each`
        value              | returnValue
        ${''}              | ${false}
        ${' '}             | ${false}
        ${'someFind'}      | ${false}
        ${'someFindOne'}   | ${false}
        ${'someCreate'}    | ${false}
        ${'someSave'}      | ${false}
        ${'find'}          | ${true}
        ${'find'}          | ${true}
        ${'findOne'}       | ${true}
        ${'findOneBy'}     | ${true}
        ${'findOneById'}   | ${true}
        ${'findMany'}      | ${true}
        ${'findManyBy'}    | ${true}
        ${'create'}        | ${true}
        ${'createOne'}     | ${true}
        ${'createMany'}    | ${true}
        ${'save'}          | ${true}
        ${'saveOne'}       | ${true}
        ${'saveMany'}      | ${true}
        ${'update'}        | ${true}
        ${'updateOne'}     | ${true}
        ${'updateOneBy'}   | ${true}
        ${'updateOneById'} | ${true}
        ${'updateMany'}    | ${true}
        ${'updateManyBy'}  | ${true}
        ${'delete'}        | ${true}
        ${'deleteOne'}     | ${true}
        ${'deleteOneBy'}   | ${true}
        ${'deleteOneById'} | ${true}
        ${'deleteMany'}    | ${true}
        ${'deleteManyBy'}  | ${true}
      `(
        `isResourceOperationName($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(isResourceOperationName(value)).toEqual(returnValue);
        }
      );
    });
  });

  describe('isXResourceOperationName', () => {
    describe('returns', () => {
      it.each`
        func                                    | value              | returnValue
        ${isResourceOperationNameFind}          | ${'find'}          | ${true}
        ${isResourceOperationNameFindOne}       | ${'findOne'}       | ${true}
        ${isResourceOperationNameFindOneBy}     | ${'findOneBy'}     | ${true}
        ${isResourceOperationNameFindOneById}   | ${'findOneById'}   | ${true}
        ${isResourceOperationNameFindMany}      | ${'findMany'}      | ${true}
        ${isResourceOperationNameFindManyBy}    | ${'findManyBy'}    | ${true}
        ${isResourceOperationNameCreate}        | ${'create'}        | ${true}
        ${isResourceOperationNameCreateOne}     | ${'createOne'}     | ${true}
        ${isResourceOperationNameCreateMany}    | ${'createMany'}    | ${true}
        ${isResourceOperationNameSave}          | ${'save'}          | ${true}
        ${isResourceOperationNameSaveOne}       | ${'saveOne'}       | ${true}
        ${isResourceOperationNameSaveMany}      | ${'saveMany'}      | ${true}
        ${isResourceOperationNameUpdate}        | ${'update'}        | ${true}
        ${isResourceOperationNameUpdateOne}     | ${'updateOne'}     | ${true}
        ${isResourceOperationNameUpdateOneBy}   | ${'updateOneBy'}   | ${true}
        ${isResourceOperationNameUpdateOneById} | ${'updateOneById'} | ${true}
        ${isResourceOperationNameUpdateMany}    | ${'updateMany'}    | ${true}
        ${isResourceOperationNameUpdateManyBy}  | ${'updateManyBy'}  | ${true}
        ${isResourceOperationNameDelete}        | ${'delete'}        | ${true}
        ${isResourceOperationNameDeleteOne}     | ${'deleteOne'}     | ${true}
        ${isResourceOperationNameDeleteOneBy}   | ${'deleteOneBy'}   | ${true}
        ${isResourceOperationNameDeleteOneById} | ${'deleteOneById'} | ${true}
        ${isResourceOperationNameDeleteMany}    | ${'deleteMany'}    | ${true}
        ${isResourceOperationNameDeleteManyBy}  | ${'deleteManyBy'}  | ${true}
      `(
        `($func.name($value) should return $returnValue`,
        ({ func, value, returnValue }) => {
          expect(func(value)).toEqual(returnValue);
        }
      );
    });
  });
});
