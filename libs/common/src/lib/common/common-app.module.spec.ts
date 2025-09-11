import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Test } from '@nestjs/testing';
import { CommonAppModule } from './common-app.module.js';
describe('CommonAppModule', () => {
  it('should initialize', async () => {
    const module = await Test.createTestingModule({
      imports: [CommonAppModule],
    }).compile();

    expect(module).toBeDefined();
    expect(module.get(EventEmitter2)).toBeDefined();
    expect(module.get(ConfigService)).toBeDefined();
    expect(module.get(CACHE_MANAGER)).toBeDefined();
  });
});
