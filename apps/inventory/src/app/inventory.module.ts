import { Module } from '@nestjs/common';
import { PrismaClient } from '@restly/inventory-db';
import { PrismaModule } from '@restly/prisma';
import { CategoryModule } from './resources/category/category.module.js';

@Module({
  imports: [
    PrismaModule.forRoot({ clientInstance: new PrismaClient() }),
    CategoryModule,
  ],
})
export class InventoryModule {}
