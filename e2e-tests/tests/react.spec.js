import { describe, expect, test } from '@playwright/test'

describe('Pokedex', () => {
  test('Front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:5001')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo')).toBeVisible()
  })
})