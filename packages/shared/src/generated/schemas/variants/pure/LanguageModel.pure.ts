import * as z from 'zod';
import { AiVendorSchema } from '../../enums/AiVendor.schema';
// prettier-ignore
export const LanguageModelModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    displayName: z.string().nullable(),
    vendor: AiVendorSchema,
    promptPrice: z.number(),
    completionPrice: z.number(),
    contextTokensMax: z.number().int(),
    completionTokensMax: z.number().int(),
    description: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    apiKeyId: z.number().int().nullable(),
    apiKey: z.unknown().nullable(),
    parametersConfig: z.unknown().nullable(),
    Prompts: z.array(z.unknown()),
    PromptVersion: z.array(z.unknown()),
    disabledInOrganizations: z.array(z.unknown())
}).strict();

export type LanguageModelPureType = z.infer<typeof LanguageModelModelSchema>;
