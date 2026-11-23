import { z } from 'zod'

export const PaletteColorSchema = z.object({
  code: z.string().min(1),
  name: z.string().min(1),
  hex: z.string().regex(/^#[0-9a-fA-F]{6}$/),
})

export const PaletteManifestSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  version: z.string().min(1),
  sourceUrl: z.string().url().optional(),
  license: z.string().optional(),
  attribution: z.string().optional(),
  officiality: z.enum(['project', 'official', 'community', 'user-imported']),
  colors: z.array(PaletteColorSchema).min(1),
})

export type PaletteColor = z.infer<typeof PaletteColorSchema>
export type PaletteManifest = z.infer<typeof PaletteManifestSchema>

// Project-owned reference palette. It does not represent any brand's physical colors.
export const GENERIC_PALETTE: PaletteManifest = {
  id: 'generic-24',
  name: 'BeadStudio Generic 24',
  version: '1',
  officiality: 'project',
  colors: [
    { code: 'B01', name: 'Black', hex: '#1F1F1F' },
    { code: 'W01', name: 'White', hex: '#FFFFFF' },
    { code: 'G01', name: 'Light Gray', hex: '#D9D9D9' },
    { code: 'G02', name: 'Gray', hex: '#9A9A9A' },
    { code: 'G03', name: 'Dark Gray', hex: '#5A5A5A' },
    { code: 'R01', name: 'Red', hex: '#D7263D' },
    { code: 'R02', name: 'Coral', hex: '#F25F5C' },
    { code: 'O01', name: 'Orange', hex: '#F28C28' },
    { code: 'Y01', name: 'Yellow', hex: '#F6C445' },
    { code: 'Y02', name: 'Cream', hex: '#F7E7B4' },
    { code: 'G04', name: 'Lime', hex: '#A8D46F' },
    { code: 'G05', name: 'Green', hex: '#3F9B5B' },
    { code: 'G06', name: 'Dark Green', hex: '#1F6B45' },
    { code: 'T01', name: 'Mint', hex: '#8ED1C6' },
    { code: 'T02', name: 'Teal', hex: '#2E8B8B' },
    { code: 'B02', name: 'Sky', hex: '#8EC5E8' },
    { code: 'B03', name: 'Blue', hex: '#2F6DB5' },
    { code: 'B04', name: 'Navy', hex: '#1F3A5F' },
    { code: 'P01', name: 'Lavender', hex: '#C7B8E8' },
    { code: 'P02', name: 'Purple', hex: '#7C5CBF' },
    { code: 'P03', name: 'Pink', hex: '#F2A7C3' },
    { code: 'P04', name: 'Rose', hex: '#D65A8C' },
    { code: 'BR01', name: 'Brown', hex: '#8B5A3C' },
    { code: 'BR02', name: 'Tan', hex: '#C89F7A' },
  ],
}
