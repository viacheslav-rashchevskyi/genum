import * as z from 'zod';

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string(),
  authID: z.string(),
  picture: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserType = z.infer<typeof UserSchema>;
