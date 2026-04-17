import * as z from 'zod';

export const TestcaseFileSchema = z.object({
  id: z.number().int(),
  testcaseId: z.number().int(),
  fileId: z.string(),
});

export type TestcaseFileType = z.infer<typeof TestcaseFileSchema>;
