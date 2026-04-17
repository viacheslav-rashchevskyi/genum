import * as z from 'zod';

export const OrganizationApiKeyScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'vendor', 'key', 'publicKey', 'createdAt', 'updatedAt', 'name', 'baseUrl'])

export type OrganizationApiKeyScalarFieldEnum = z.infer<typeof OrganizationApiKeyScalarFieldEnumSchema>;