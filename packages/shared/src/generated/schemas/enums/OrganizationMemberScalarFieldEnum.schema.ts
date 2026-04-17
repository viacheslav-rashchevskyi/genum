import * as z from 'zod';

export const OrganizationMemberScalarFieldEnumSchema = z.enum(['id', 'userId', 'organizationId', 'role'])

export type OrganizationMemberScalarFieldEnum = z.infer<typeof OrganizationMemberScalarFieldEnumSchema>;