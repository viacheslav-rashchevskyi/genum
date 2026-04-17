import * as z from 'zod';

export const NotificationSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
});

export type NotificationType = z.infer<typeof NotificationSchema>;
