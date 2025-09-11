import {
    Get,
    GetBy,
    GetMany,
    GetManyBy,
    GetOne,
    GetOneBy,
    GetOneById,
} from './get.js';
describe('GetMethods', () => {
  it('should initialize', () => {
    class SampleController {
      @Get()
      Get() {
        //
      }
      @GetBy('nmae')
      GetBy() {
        //
      }
      @GetMany()
      GetMany() {
        //
      }
      @GetManyBy('name')
      GetManyBy() {
        //
      }
      @GetOne()
      GetOne() {
        //
      }
      @GetOneBy('name')
      GetOneBy() {
        //
      }
      @GetOneById()
      GetOneById() {
        //
      }
    }
  });
});
