import * as z from 'zod';

export const MemoryScalarFieldEnumSchema = z.enum(['id', 'key', 'value', 'promptId', 'createdAt', 'updatedAt'])

export type MemoryScalarFieldEnum = z.infer<typeof MemoryScalarFieldEnumSchema>;