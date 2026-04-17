import * as z from 'zod';

export const MemorySchema = z.object({
  id: z.number().int(),
  key: z.string(),
  value: z.string(),
  promptId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type MemoryType = z.infer<typeof MemorySchema>;
