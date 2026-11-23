import { z } from 'zod'

export const CORE_VERSION = '0.1.0'

export const PatternDocumentSchema = z.object({
  schemaVersion: z.literal(1),
  cols: z.number().int().min(1).max(256),
  rows: z.number().int().min(1).max(256),
  paletteId: z.string().min(1),
  paletteVersion: z.string().min(1),
  colors: z.array(z.string().min(1)).min(1),
  cells: z.array(z.number().int().min(0)),
  meta: z.object({
    title: z.string().optional(),
    createdAt: z.string(),
    source: z.string().optional(),
  }),
})

export type PatternDocument = z.infer<typeof PatternDocumentSchema>
