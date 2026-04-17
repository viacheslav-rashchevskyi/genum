import * as z from 'zod';

export const AiVendorSchema = z.enum(['OPENAI', 'GOOGLE', 'ANTHROPIC', 'CUSTOM_OPENAI_COMPATIBLE'])

export type AiVendor = z.infer<typeof AiVendorSchema>;