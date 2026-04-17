import * as z from 'zod';
// prettier-ignore
export const NotificationModelSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    createdAt: z.date(),
    NotificationRead: z.array(z.unknown())
}).strict();

export type NotificationPureType = z.infer<typeof NotificationModelSchema>;
