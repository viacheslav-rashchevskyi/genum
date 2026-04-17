import * as z from 'zod';

export const FileObjectSchema = z.object({
  id: z.string(),
  key: z.string(),
  name: z.string(),
  size: z.number().int(),
  contentType: z.string(),
  createdAt: z.date(),
  projectId: z.number().int(),
});

export type FileObjectType = z.infer<typeof FileObjectSchema>;
