import * as z from 'zod';
// prettier-ignore
export const PromptChatModelSchema = z.object({
    id: z.number().int(),
    promptId: z.number().int(),
    prompt: z.unknown(),
    userId: z.number().int(),
    user: z.unknown(),
    thread_id: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    messages: z.array(z.unknown())
}).strict();

export type PromptChatPureType = z.infer<typeof PromptChatModelSchema>;
