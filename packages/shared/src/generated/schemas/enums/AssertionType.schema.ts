import * as z from 'zod';

export const AssertionTypeSchema = z.enum(['STRICT', 'AI', 'MANUAL'])

export type AssertionType = z.infer<typeof AssertionTypeSchema>;