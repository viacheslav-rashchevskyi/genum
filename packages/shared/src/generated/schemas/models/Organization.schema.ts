import * as z from 'zod';

export const OrganizationSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  personal: z.boolean().default(true),
});

export type OrganizationType = z.infer<typeof OrganizationSchema>;
