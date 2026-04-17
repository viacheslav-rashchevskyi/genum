import * as z from 'zod';
import { TestCaseStatusSchema } from '../../enums/TestCaseStatus.schema';
// prettier-ignore
export const TestCaseModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    promptId: z.number().int(),
    input: z.string(),
    expectedOutput: z.string(),
    expectedChainOfThoughts: z.string().nullable(),
    lastOutput: z.string(),
    lastChainOfThoughts: z.string().nullable(),
    memoryId: z.number().int().nullable(),
    memory: z.unknown().nullable(),
    status: TestCaseStatusSchema,
    assertionThoughts: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    prompt: z.unknown(),
    files: z.array(z.unknown())
}).strict();

export type TestCasePureType = z.infer<typeof TestCaseModelSchema>;
