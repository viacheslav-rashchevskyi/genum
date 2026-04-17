import * as z from 'zod';
// prettier-ignore
export const PromptChatMessageModelSchema = z.object({
    id: z.number().int(),
    promptChatId: z.number().int(),
    promptChat: z.unknown(),
    message: z.unknown(),
    createdAt: z.date()
}).strict();

export type PromptChatMessagePureType = z.infer<typeof PromptChatMessageModelSchema>;
