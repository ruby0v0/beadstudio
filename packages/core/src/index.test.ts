import { describe, expect, it } from 'vitest'
import { PatternDocumentSchema } from './index'

describe('PatternDocumentSchema', () => {
  it('accepts a minimal valid document', () => {
    const doc = {
      schemaVersion: 1,
      cols: 2,
      rows: 2,
      paletteId: 'generic-24',
      paletteVersion: '1',
      colors: ['B01', 'W01'],
      cells: [0, 1, 1, 0],
      meta: { createdAt: '2026-11-22T00:00:00.000Z' },
    }

    expect(PatternDocumentSchema.parse(doc)).toEqual(doc)
  })

  it('rejects a document with a negative cell index', () => {
    const result = PatternDocumentSchema.safeParse({
      schemaVersion: 1,
      cols: 1,
      rows: 1,
      paletteId: 'generic-24',
      paletteVersion: '1',
      colors: ['B01'],
      cells: [-1],
      meta: { createdAt: '2026-11-22T00:00:00.000Z' },
    })

    expect(result.success).toBe(false)
  })
})
