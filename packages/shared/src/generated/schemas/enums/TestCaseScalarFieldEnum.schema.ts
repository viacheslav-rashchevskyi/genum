import * as z from 'zod';

export const TestCaseScalarFieldEnumSchema = z.enum(['id', 'name', 'promptId', 'input', 'expectedOutput', 'expectedChainOfThoughts', 'lastOutput', 'lastChainOfThoughts', 'memoryId', 'status', 'assertionThoughts', 'createdAt', 'updatedAt'])

export type TestCaseScalarFieldEnum = z.infer<typeof TestCaseScalarFieldEnumSchema>;