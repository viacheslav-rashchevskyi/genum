import * as z from 'zod';

export const PromptChatScalarFieldEnumSchema = z.enum(['id', 'promptId', 'userId', 'thread_id', 'createdAt', 'updatedAt'])

export type PromptChatScalarFieldEnum = z.infer<typeof PromptChatScalarFieldEnumSchema>;