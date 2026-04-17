import * as z from 'zod';
// prettier-ignore
export const ProjectApiKeyModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    key: z.string(),
    publicKey: z.string(),
    projectId: z.number().int(),
    project: z.unknown(),
    authorId: z.number().int(),
    author: z.unknown(),
    createdAt: z.date(),
    lastUsed: z.date()
}).strict();

export type ProjectApiKeyPureType = z.infer<typeof ProjectApiKeyModelSchema>;
