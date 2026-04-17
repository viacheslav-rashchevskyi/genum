import * as z from 'zod';

export const NotificationReadScalarFieldEnumSchema = z.enum(['id', 'notificationId', 'userId'])

export type NotificationReadScalarFieldEnum = z.infer<typeof NotificationReadScalarFieldEnumSchema>;