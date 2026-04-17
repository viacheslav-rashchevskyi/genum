import * as z from 'zod';
import { OrganizationRoleSchema } from '../enums/OrganizationRole.schema';

export const OrganizationMemberSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  organizationId: z.number().int(),
  role: OrganizationRoleSchema,
});

export type OrganizationMemberType = z.infer<typeof OrganizationMemberSchema>;
