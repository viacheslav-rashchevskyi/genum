import * as z from 'zod';

export const PromptChatMessageScalarFieldEnumSchema = z.enum(['id', 'promptChatId', 'message', 'createdAt'])

export type PromptChatMessageScalarFieldEnum = z.infer<typeof PromptChatMessageScalarFieldEnumSchema>;