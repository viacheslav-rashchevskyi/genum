import * as z from 'zod';

export const OrganizationQuotaSchema = z.object({
  id: z.number().int(),
  balance: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  organizationId: z.number().int(),
});

export type OrganizationQuotaType = z.infer<typeof OrganizationQuotaSchema>;
