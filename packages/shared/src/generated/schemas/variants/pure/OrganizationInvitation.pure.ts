import * as z from 'zod';
import { OrganizationRoleSchema } from '../../enums/OrganizationRole.schema';
// prettier-ignore
export const OrganizationInvitationModelSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    organizationId: z.number().int(),
    role: OrganizationRoleSchema,
    token: z.string(),
    createdAt: z.date(),
    expiresAt: z.date(),
    organization: z.unknown()
}).strict();

export type OrganizationInvitationPureType = z.infer<typeof OrganizationInvitationModelSchema>;
