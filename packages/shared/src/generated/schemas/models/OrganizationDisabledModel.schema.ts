import * as z from 'zod';

export const OrganizationDisabledModelSchema = z.object({
  id: z.number().int(),
  organizationId: z.number().int(),
  modelId: z.number().int(),
  disabledAt: z.date(),
});

export type OrganizationDisabledModelType = z.infer<typeof OrganizationDisabledModelSchema>;
