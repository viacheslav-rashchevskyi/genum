import * as z from 'zod';
// prettier-ignore
export const MemoryModelSchema = z.object({
    id: z.number().int(),
    key: z.string(),
    value: z.string(),
    promptId: z.number().int(),
    prompt: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date(),
    testCases: z.array(z.unknown())
}).strict();

export type MemoryPureType = z.infer<typeof MemoryModelSchema>;
