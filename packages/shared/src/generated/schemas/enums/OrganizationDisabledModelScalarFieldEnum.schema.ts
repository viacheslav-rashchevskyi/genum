import * as z from 'zod';

export const OrganizationDisabledModelScalarFieldEnumSchema = z.enum(['id', 'organizationId', 'modelId', 'disabledAt'])

export type OrganizationDisabledModelScalarFieldEnum = z.infer<typeof OrganizationDisabledModelScalarFieldEnumSchema>;