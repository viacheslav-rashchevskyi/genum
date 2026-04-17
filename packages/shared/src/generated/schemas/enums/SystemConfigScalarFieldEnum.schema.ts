import * as z from 'zod';

export const SystemConfigScalarFieldEnumSchema = z.enum(['id', 'key', 'value', 'createdAt'])

export type SystemConfigScalarFieldEnum = z.infer<typeof SystemConfigScalarFieldEnumSchema>;