import * as z from 'zod';

export const TestCaseStatusSchema = z.enum(['OK', 'NOK', 'PENDING', 'NEED_RUN', 'FAILED'])

export type TestCaseStatus = z.infer<typeof TestCaseStatusSchema>;