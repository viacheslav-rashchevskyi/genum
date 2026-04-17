import * as z from 'zod';

export const OrganizationInvitationScalarFieldEnumSchema = z.enum(['id', 'email', 'organizationId', 'role', 'token', 'createdAt', 'expiresAt'])

export type OrganizationInvitationScalarFieldEnum = z.infer<typeof OrganizationInvitationScalarFieldEnumSchema>;