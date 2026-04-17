import * as z from 'zod';

export const ProjectSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  initial: z.boolean().default(true),
  organizationId: z.number().int(),
});

export type ProjectType = z.infer<typeof ProjectSchema>;
