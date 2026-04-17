import * as z from 'zod';
import { AiVendorSchema } from '../../enums/AiVendor.schema';
// prettier-ignore
export const OrganizationApiKeyModelSchema = z.object({
    id: z.number().int(),
    organizationId: z.number().int(),
    vendor: AiVendorSchema,
    key: z.string(),
    publicKey: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    name: z.string().nullable(),
    baseUrl: z.string().nullable(),
    organization: z.unknown(),
    languageModels: z.array(z.unknown())
}).strict();

export type OrganizationApiKeyPureType = z.infer<typeof OrganizationApiKeyModelSchema>;
