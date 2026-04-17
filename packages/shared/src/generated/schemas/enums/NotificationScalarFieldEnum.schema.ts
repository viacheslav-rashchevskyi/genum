import * as z from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id', 'title', 'content', 'createdAt'])

export type NotificationScalarFieldEnum = z.infer<typeof NotificationScalarFieldEnumSchema>;