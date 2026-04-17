import * as z from 'zod';

export const UserSessionScalarFieldEnumSchema = z.enum(['id', 'userId', 'createdAt', 'expiresAt', 'revokedAt', 'userAgent', 'ip'])

export type UserSessionScalarFieldEnum = z.infer<typeof UserSessionScalarFieldEnumSchema>;