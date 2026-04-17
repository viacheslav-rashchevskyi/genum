import * as z from 'zod';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    name: z.string(),
    authID: z.string(),
    picture: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    organizationMemberships: z.array(z.unknown()),
    projectMemberships: z.array(z.unknown()),
    commits: z.array(z.unknown()),
    projectApiKeys: z.array(z.unknown()),
    promptChats: z.array(z.unknown()),
    notificationReads: z.array(z.unknown()),
    userCredentials: z.array(z.unknown()),
    userSessions: z.array(z.unknown())
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
