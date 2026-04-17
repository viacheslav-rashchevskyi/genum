import * as z from 'zod';

export const ProjectRoleSchema = z.enum(['ADMIN', 'MEMBER'])

export type ProjectRole = z.infer<typeof ProjectRoleSchema>;