import * as z from 'zod';
// prettier-ignore
export const TestcaseFileModelSchema = z.object({
    id: z.number().int(),
    testcaseId: z.number().int(),
    fileId: z.string(),
    testcase: z.unknown(),
    file: z.unknown()
}).strict();

export type TestcaseFilePureType = z.infer<typeof TestcaseFileModelSchema>;
