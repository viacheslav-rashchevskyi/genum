import * as z from 'zod';

export const ProjectApiKeySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  key: z.string(),
  publicKey: z.string(),
  projectId: z.number().int(),
  authorId: z.number().int(),
  createdAt: z.date(),
  lastUsed: z.date(),
});

export type ProjectApiKeyType = z.infer<typeof ProjectApiKeySchema>;
