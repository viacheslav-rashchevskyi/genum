import * as z from 'zod';

export const PromptVersionSchema = z.object({
  id: z.number().int(),
  branchId: z.number().int(),
  commitHash: z.string(),
  commitMsg: z.string(),
  value: z.string(),
  languageModelId: z.number().int().default(1),
  languageModelConfig: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").default("{}"),
  audit: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
  authorId: z.number().int().nullish(),
  createdAt: z.date(),
});

export type PromptVersionType = z.infer<typeof PromptVersionSchema>;
