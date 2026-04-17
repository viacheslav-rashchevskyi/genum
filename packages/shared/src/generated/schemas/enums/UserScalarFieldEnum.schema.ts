import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'name', 'authID', 'picture', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;