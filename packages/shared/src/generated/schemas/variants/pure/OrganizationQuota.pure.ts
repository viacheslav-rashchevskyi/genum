import * as z from 'zod';
// prettier-ignore
export const OrganizationQuotaModelSchema = z.object({
    id: z.number().int(),
    balance: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    organizationId: z.number().int(),
    organization: z.unknown()
}).strict();

export type OrganizationQuotaPureType = z.infer<typeof OrganizationQuotaModelSchema>;
