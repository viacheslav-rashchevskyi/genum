import * as z from 'zod';
// prettier-ignore
export const BranchModelSchema = z.object({
    id: z.number().int(),
    promptId: z.number().int(),
    prompt: z.unknown(),
    name: z.string(),
    createdAt: z.date(),
    promptVersions: z.array(z.unknown())
}).strict();

export type BranchPureType = z.infer<typeof BranchModelSchema>;
