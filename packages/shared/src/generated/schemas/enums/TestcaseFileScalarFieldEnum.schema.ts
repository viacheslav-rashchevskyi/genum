import * as z from 'zod';

export const TestcaseFileScalarFieldEnumSchema = z.enum(['id', 'testcaseId', 'fileId'])

export type TestcaseFileScalarFieldEnum = z.infer<typeof TestcaseFileScalarFieldEnumSchema>;