import * as z from 'zod';
import { AssertionTypeSchema } from '../enums/AssertionType.schema';

export const PromptSchema = z.object({
  id: z.number().int(),
  value: z.string(),
  languageModelId: z.number().int().default(1),
  name: z.string(),
  languageModelConfig: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").default("{}"),
  assertionType: AssertionTypeSchema.default("STRICT"),
  assertionValue: z.string().nullish(),
  commited: z.boolean(),
  projectId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PromptType = z.infer<typeof PromptSchema>;
