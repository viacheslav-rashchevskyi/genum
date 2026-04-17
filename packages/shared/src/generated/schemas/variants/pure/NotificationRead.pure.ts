import * as z from 'zod';
// prettier-ignore
export const NotificationReadModelSchema = z.object({
    id: z.string(),
    notificationId: z.string(),
    notification: z.unknown(),
    userId: z.number().int(),
    user: z.unknown()
}).strict();

export type NotificationReadPureType = z.infer<typeof NotificationReadModelSchema>;
