import * as z from 'zod';
// prettier-ignore
export const SystemConfigModelSchema = z.object({
    id: z.number().int(),
    key: z.string(),
    value: z.string(),
    createdAt: z.date()
}).strict();

export type SystemConfigPureType = z.infer<typeof SystemConfigModelSchema>;
