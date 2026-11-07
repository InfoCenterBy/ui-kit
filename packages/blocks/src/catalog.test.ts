import { describe, expect, it } from 'vitest'
import { categories, getCategory, groups } from './catalog'

describe('component library', () => {
	it('loads markup for every variant', () => {
		for (const category of categories) {
			expect(category.variants.length).toBeGreaterThan(0)
			for (const variant of category.variants) {
				expect(
					variant.html.trim(),
					`${category.slug}/${variant.name}`
				).not.toBe('')
			}
		}
	})

	it('has unique slugs in known groups', () => {
		const slugs = categories.map((c) => c.slug)
		expect(new Set(slugs).size).toBe(slugs.length)
		const known = new Set(groups.map((g) => g.id))
		for (const category of categories) {
			expect(known.has(category.group), category.slug).toBe(true)
		}
	})

	it('picks the showcase among the variants', () => {
		for (const category of categories) {
			expect(category.variants).toContain(category.showcase)
		}
	})

	it('finds a category by slug', () => {
		expect(getCategory('button')?.name).toBe('Button')
		expect(getCategory('nope')).toBeUndefined()
	})
})
