import * as z from 'zod';

export const NotificationReadSchema = z.object({
  id: z.string(),
  notificationId: z.string(),
  userId: z.number().int(),
});

export type NotificationReadType = z.infer<typeof NotificationReadSchema>;
