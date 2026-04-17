import * as z from 'zod';
// prettier-ignore
export const OrganizationModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    personal: z.boolean(),
    quota: z.unknown().nullable(),
    members: z.array(z.unknown()),
    projects: z.array(z.unknown()),
    invitations: z.array(z.unknown()),
    apiKeys: z.array(z.unknown()),
    disabledModels: z.array(z.unknown())
}).strict();

export type OrganizationPureType = z.infer<typeof OrganizationModelSchema>;
