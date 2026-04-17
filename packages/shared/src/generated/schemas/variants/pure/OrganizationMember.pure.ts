import * as z from 'zod';
import { OrganizationRoleSchema } from '../../enums/OrganizationRole.schema';
// prettier-ignore
export const OrganizationMemberModelSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    organizationId: z.number().int(),
    role: OrganizationRoleSchema,
    user: z.unknown(),
    organization: z.unknown()
}).strict();

export type OrganizationMemberPureType = z.infer<typeof OrganizationMemberModelSchema>;
