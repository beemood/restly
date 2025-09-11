import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CommonAppModule, DebugInterceptor } from '@restly/common';
import { InventoryModule } from './inventory.module.js';

@Module({
  imports: [CommonAppModule, InventoryModule],
  providers: [{ provide: APP_INTERCEPTOR, useClass: DebugInterceptor }],
})
export class AppModule {}
