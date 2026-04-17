import * as z from 'zod';

export const OrganizationQuotaScalarFieldEnumSchema = z.enum(['id', 'balance', 'createdAt', 'updatedAt', 'organizationId'])

export type OrganizationQuotaScalarFieldEnum = z.infer<typeof OrganizationQuotaScalarFieldEnumSchema>;