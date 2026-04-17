import * as z from 'zod';

export const ProjectMemberScalarFieldEnumSchema = z.enum(['id', 'userId', 'projectId', 'role'])

export type ProjectMemberScalarFieldEnum = z.infer<typeof ProjectMemberScalarFieldEnumSchema>;