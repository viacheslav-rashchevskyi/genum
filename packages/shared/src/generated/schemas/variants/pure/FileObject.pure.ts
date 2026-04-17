import * as z from 'zod';
// prettier-ignore
export const FileObjectModelSchema = z.object({
    id: z.string(),
    key: z.string(),
    name: z.string(),
    size: z.number().int(),
    contentType: z.string(),
    createdAt: z.date(),
    projectId: z.number().int(),
    project: z.unknown(),
    testcaseFiles: z.array(z.unknown())
}).strict();

export type FileObjectPureType = z.infer<typeof FileObjectModelSchema>;
