import * as z from 'zod';
// prettier-ignore
export const ProjectModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    initial: z.boolean(),
    members: z.array(z.unknown()),
    organizationId: z.number().int(),
    organization: z.unknown(),
    Prompts: z.array(z.unknown()),
    apiKeys: z.array(z.unknown()),
    files: z.array(z.unknown())
}).strict();

export type ProjectPureType = z.infer<typeof ProjectModelSchema>;
