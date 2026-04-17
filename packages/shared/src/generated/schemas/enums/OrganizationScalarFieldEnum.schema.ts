import * as z from 'zod';

export const OrganizationScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'personal'])

export type OrganizationScalarFieldEnum = z.infer<typeof OrganizationScalarFieldEnumSchema>;