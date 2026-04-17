import * as z from 'zod';
import { AssertionTypeSchema } from '../../enums/AssertionType.schema';
// prettier-ignore
export const PromptModelSchema = z.object({
    id: z.number().int(),
    value: z.string(),
    languageModelId: z.number().int(),
    languageModel: z.unknown(),
    name: z.string(),
    languageModelConfig: z.unknown(),
    assertionType: AssertionTypeSchema,
    assertionValue: z.string().nullable(),
    commited: z.boolean(),
    projectId: z.number().int(),
    project: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date(),
    testCases: z.array(z.unknown()),
    branches: z.array(z.unknown()),
    memories: z.array(z.unknown()),
    chat: z.array(z.unknown()),
    audit: z.unknown().nullable()
}).strict();

export type PromptPureType = z.infer<typeof PromptModelSchema>;
