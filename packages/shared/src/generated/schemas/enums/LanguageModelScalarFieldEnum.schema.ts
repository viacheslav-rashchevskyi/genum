import * as z from 'zod';

export const LanguageModelScalarFieldEnumSchema = z.enum(['id', 'name', 'displayName', 'vendor', 'promptPrice', 'completionPrice', 'contextTokensMax', 'completionTokensMax', 'description', 'createdAt', 'updatedAt', 'apiKeyId', 'parametersConfig'])

export type LanguageModelScalarFieldEnum = z.infer<typeof LanguageModelScalarFieldEnumSchema>;