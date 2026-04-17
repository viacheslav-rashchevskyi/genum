import * as z from 'zod';

export const UserSessionSchema = z.object({
  id: z.string(),
  userId: z.number().int(),
  createdAt: z.date(),
  expiresAt: z.date(),
  revokedAt: z.date().nullish(),
  userAgent: z.string().nullish(),
  ip: z.string().nullish(),
});

export type UserSessionType = z.infer<typeof UserSessionSchema>;
