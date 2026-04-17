import * as z from 'zod';

export const ProjectApiKeyScalarFieldEnumSchema = z.enum(['id', 'name', 'key', 'publicKey', 'projectId', 'authorId', 'createdAt', 'lastUsed'])

export type ProjectApiKeyScalarFieldEnum = z.infer<typeof ProjectApiKeyScalarFieldEnumSchema>;