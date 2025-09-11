import {
  AutoWireResourceController,
  Body,
  PaginatorSchema,
  ParamId,
  Query,
} from '@restly/common';
import { type Prisma } from '@restly/inventory-db';
import { InjectRepository } from '@restly/prisma';

@AutoWireResourceController()
export class CategoryController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.CategoryDelegate
  ) {}

  findMany(@Query(PaginatorSchema) paginator: any) {
    return this.repo.findMany({ ...paginator });
  }

  saveOne(@Body() data: any) {
    return this.repo.create({ data });
  }

  deleteOneById(@ParamId() id: number) {
    return this.repo.delete({ where: { id } });
  }

  updateOneById(@ParamId() id: number, @Body() data: any) {
    return this.repo.update({ where: { id }, data });
  }
}
