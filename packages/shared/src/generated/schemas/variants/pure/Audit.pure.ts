import * as z from 'zod';
// prettier-ignore
export const AuditModelSchema = z.object({
    id: z.number().int(),
    promptId: z.number().int(),
    prompt: z.unknown(),
    data: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AuditPureType = z.infer<typeof AuditModelSchema>;
