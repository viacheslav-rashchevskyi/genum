import * as z from 'zod';

export const PromptScalarFieldEnumSchema = z.enum(['id', 'value', 'languageModelId', 'name', 'languageModelConfig', 'assertionType', 'assertionValue', 'commited', 'projectId', 'createdAt', 'updatedAt'])

export type PromptScalarFieldEnum = z.infer<typeof PromptScalarFieldEnumSchema>;