import * as z from 'zod';
import { AiVendorSchema } from '../enums/AiVendor.schema';

export const LanguageModelSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  displayName: z.string().nullish(),
  vendor: AiVendorSchema.default("OPENAI"),
  promptPrice: z.number(),
  completionPrice: z.number(),
  contextTokensMax: z.number().int(),
  completionTokensMax: z.number().int(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  apiKeyId: z.number().int().nullish(),
  parametersConfig: z.unknown().refine((val) => { const getDepth = (obj: unknown, depth: number = 0): number => { if (depth > 10) return depth; if (obj === null || typeof obj !== 'object') return depth; const values = Object.values(obj as Record<string, unknown>); if (values.length === 0) return depth; return Math.max(...values.map(v => getDepth(v, depth + 1))); }; return getDepth(val) <= 10; }, "JSON nesting depth exceeds maximum of 10").nullish(),
});

export type LanguageModelType = z.infer<typeof LanguageModelSchema>;
