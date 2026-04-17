import * as z from 'zod';

export const FileObjectScalarFieldEnumSchema = z.enum(['id', 'key', 'name', 'size', 'contentType', 'createdAt', 'projectId'])

export type FileObjectScalarFieldEnum = z.infer<typeof FileObjectScalarFieldEnumSchema>;