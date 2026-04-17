import * as z from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'initial', 'organizationId'])

export type ProjectScalarFieldEnum = z.infer<typeof ProjectScalarFieldEnumSchema>;