import * as z from 'zod';
import { AiVendorSchema } from '../enums/AiVendor.schema';

export const OrganizationApiKeySchema = z.object({
  id: z.number().int(),
  organizationId: z.number().int(),
  vendor: AiVendorSchema,
  key: z.string(),
  publicKey: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string().nullish(),
  baseUrl: z.string().nullish(),
});

export type OrganizationApiKeyType = z.infer<typeof OrganizationApiKeySchema>;
