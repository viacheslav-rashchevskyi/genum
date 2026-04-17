import * as z from 'zod';

export const BranchSchema = z.object({
  id: z.number().int(),
  promptId: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
});

export type BranchType = z.infer<typeof BranchSchema>;
