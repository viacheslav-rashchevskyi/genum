import * as z from 'zod';

export const PromptVersionScalarFieldEnumSchema = z.enum(['id', 'branchId', 'commitHash', 'commitMsg', 'value', 'languageModelId', 'languageModelConfig', 'audit', 'authorId', 'createdAt'])

export type PromptVersionScalarFieldEnum = z.infer<typeof PromptVersionScalarFieldEnumSchema>;