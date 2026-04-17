import * as z from 'zod';
// prettier-ignore
export const UserCredentialModelSchema = z.object({
    id: z.number().int(),
    userId: z.number().int(),
    user: z.unknown(),
    passwordHash: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserCredentialPureType = z.infer<typeof UserCredentialModelSchema>;
