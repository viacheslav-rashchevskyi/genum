import * as z from 'zod';

export const UserCredentialScalarFieldEnumSchema = z.enum(['id', 'userId', 'passwordHash', 'createdAt', 'updatedAt'])

export type UserCredentialScalarFieldEnum = z.infer<typeof UserCredentialScalarFieldEnumSchema>;