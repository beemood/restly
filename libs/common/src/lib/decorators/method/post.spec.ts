import { Post, PostMany, PostOne } from './post.js';
describe('PostMethods', () => {
  it('should initialize', () => {
    class SampleController {
      @Post()
      Post() {
        //
      }

      @PostMany()
      PostMany() {
        //
      }

      @PostOne()
      PostOne() {
        //
      }
    }
  });
});
