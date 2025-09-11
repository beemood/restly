import { Module } from '@nestjs/common';
import { PrismaModule } from '@restly/prisma';
import { CategoryController } from './category.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['category'] })],
  controllers: [CategoryController],
})
export class CategoryModule {}
