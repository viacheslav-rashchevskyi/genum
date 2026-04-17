import * as z from 'zod';
// prettier-ignore
export const PromptVersionModelSchema = z.object({
    id: z.number().int(),
    branchId: z.number().int(),
    branch: z.unknown(),
    commitHash: z.string(),
    commitMsg: z.string(),
    value: z.string(),
    languageModelId: z.number().int(),
    languageModel: z.unknown(),
    languageModelConfig: z.unknown(),
    audit: z.unknown().nullable(),
    authorId: z.number().int().nullable(),
    author: z.unknown().nullable(),
    createdAt: z.date()
}).strict();

export type PromptVersionPureType = z.infer<typeof PromptVersionModelSchema>;
