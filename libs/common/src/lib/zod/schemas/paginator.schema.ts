import z from 'zod';

export const PaginatorSchema = z
  .object({
    take: z.coerce.number().int().min(1).default(1),
    skip: z.coerce.number().int().min(0).default(0),
  })
  .partial();
