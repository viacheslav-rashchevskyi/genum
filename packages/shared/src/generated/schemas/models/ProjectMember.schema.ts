import * as z from 'zod';
import { ProjectRoleSchema } from '../enums/ProjectRole.schema';

export const ProjectMemberSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  projectId: z.number().int(),
  role: ProjectRoleSchema,
});

export type ProjectMemberType = z.infer<typeof ProjectMemberSchema>;
