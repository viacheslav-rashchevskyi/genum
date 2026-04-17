import * as z from 'zod';
import { ProjectRoleSchema } from '../../enums/ProjectRole.schema';
// prettier-ignore
export const ProjectMemberModelSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    projectId: z.number().int(),
    role: ProjectRoleSchema,
    user: z.unknown(),
    project: z.unknown()
}).strict();

export type ProjectMemberPureType = z.infer<typeof ProjectMemberModelSchema>;
