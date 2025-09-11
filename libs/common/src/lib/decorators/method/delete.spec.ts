import {
  Delete,
  DeleteBy,
  DeleteMany,
  DeleteManyBy,
  DeleteOne,
  DeleteOneBy,
  DeleteOneById,
} from './delete.js';
describe('DeleteMethods', () => {
  it('should initialize', () => {
    class SampleController {
      @Delete()
      Delete() {
        //
      }
      @DeleteBy('nmae')
      DeleteBy() {
        //
      }
      @DeleteMany()
      DeleteMany() {
        //
      }
      @DeleteManyBy('name')
      DeleteManyBy() {
        //
      }
      @DeleteOne()
      DeleteOne() {
        //
      }
      @DeleteOneBy('name')
      DeleteOneBy() {
        //
      }
      @DeleteOneById()
      DeleteOneById() {
        //
      }
    }
  });
});
