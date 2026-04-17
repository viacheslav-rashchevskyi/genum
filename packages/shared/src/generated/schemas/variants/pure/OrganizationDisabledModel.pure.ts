import * as z from 'zod';
// prettier-ignore
export const OrganizationDisabledModelModelSchema = z.object({
    id: z.number().int(),
    organizationId: z.number().int(),
    modelId: z.number().int(),
    disabledAt: z.date(),
    organization: z.unknown(),
    model: z.unknown()
}).strict();

export type OrganizationDisabledModelPureType = z.infer<typeof OrganizationDisabledModelModelSchema>;
