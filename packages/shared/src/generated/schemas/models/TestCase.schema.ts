import * as z from 'zod';
import { TestCaseStatusSchema } from '../enums/TestCaseStatus.schema';

export const TestCaseSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  promptId: z.number().int(),
  input: z.string(),
  expectedOutput: z.string(),
  expectedChainOfThoughts: z.string().nullish(),
  lastOutput: z.string(),
  lastChainOfThoughts: z.string().nullish(),
  memoryId: z.number().int().nullish(),
  status: TestCaseStatusSchema.default("NEED_RUN"),
  assertionThoughts: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type TestCaseType = z.infer<typeof TestCaseSchema>;
