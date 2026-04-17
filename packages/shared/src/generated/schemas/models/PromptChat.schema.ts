import * as z from 'zod';

export const PromptChatSchema = z.object({
  id: z.number().int(),
  promptId: z.number().int(),
  userId: z.number().int(),
  thread_id: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PromptChatType = z.infer<typeof PromptChatSchema>;
