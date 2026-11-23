import { describe, expect, it } from 'vitest'
import { GENERIC_PALETTE, PaletteManifestSchema } from './index'

describe('GENERIC_PALETTE', () => {
  it('matches the palette schema', () => {
    expect(PaletteManifestSchema.parse(GENERIC_PALETTE)).toEqual(GENERIC_PALETTE)
  })

  it('has unique color codes', () => {
    const codes = GENERIC_PALETTE.colors.map((color) => color.code)
    expect(new Set(codes).size).toBe(codes.length)
  })
})
