import * as z from 'zod';

export const BranchScalarFieldEnumSchema = z.enum(['id', 'promptId', 'name', 'createdAt'])

export type BranchScalarFieldEnum = z.infer<typeof BranchScalarFieldEnumSchema>;