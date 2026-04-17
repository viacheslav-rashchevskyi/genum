import * as z from 'zod';

export const OrganizationRoleSchema = z.enum(['OWNER', 'ADMIN', 'READER'])

export type OrganizationRole = z.infer<typeof OrganizationRoleSchema>;