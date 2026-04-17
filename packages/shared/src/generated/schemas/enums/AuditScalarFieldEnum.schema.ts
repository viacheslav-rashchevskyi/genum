import * as z from 'zod';

export const AuditScalarFieldEnumSchema = z.enum(['id', 'promptId', 'data', 'createdAt', 'updatedAt'])

export type AuditScalarFieldEnum = z.infer<typeof AuditScalarFieldEnumSchema>;