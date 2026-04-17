import * as z from 'zod';
import { OrganizationRoleSchema } from '../enums/OrganizationRole.schema';

export const OrganizationInvitationSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  organizationId: z.number().int(),
  role: OrganizationRoleSchema,
  token: z.string(),
  createdAt: z.date(),
  expiresAt: z.date(),
});

export type OrganizationInvitationType = z.infer<typeof OrganizationInvitationSchema>;
