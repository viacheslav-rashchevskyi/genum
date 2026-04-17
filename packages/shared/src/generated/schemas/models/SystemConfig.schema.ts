import * as z from 'zod';

export const SystemConfigSchema = z.object({
  id: z.number().int(),
  key: z.string(),
  value: z.string(),
  createdAt: z.date(),
});

export type SystemConfigType = z.infer<typeof SystemConfigSchema>;
