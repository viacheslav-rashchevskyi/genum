import * as z from 'zod';
// prettier-ignore
export const UserSessionModelSchema = z.object({
    id: z.string(),
    userId: z.number().int(),
    user: z.unknown(),
    createdAt: z.date(),
    expiresAt: z.date(),
    revokedAt: z.date().nullable(),
    userAgent: z.string().nullable(),
    ip: z.string().nullable()
}).strict();

export type UserSessionPureType = z.infer<typeof UserSessionModelSchema>;
