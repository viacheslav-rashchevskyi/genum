import * as z from 'zod';

export const UserCredentialSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  passwordHash: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserCredentialType = z.infer<typeof UserCredentialSchema>;
